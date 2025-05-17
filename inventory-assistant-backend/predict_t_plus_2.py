import pandas as pd
import numpy as np
import joblib
from sqlalchemy import create_engine
from datetime import datetime, timedelta

# === CONFIG ===
RDS_HOST = "rm-3ns023t5i1ctk89e5go.mysql.rds.aliyuncs.com"
RDS_PORT = 3306
RDS_USER = "adminAcc"
RDS_PASSWORD = "Test1234"
RDS_DB = "cleaned_data"

MODEL_PATH = "/root/sales_forecast_model.pkl"
CATEGORICAL_PATH = "/root/categorical_columns.pkl"

# === Connect to MySQL ===
engine = create_engine(f'mysql+pymysql://{RDS_USER}:{RDS_PASSWORD}@{RDS_HOST}:{RDS_PORT}/{RDS_DB}')

def build_features_for_date(df, product_info, predict_date):
    predict_date = pd.to_datetime(predict_date).normalize()
    df['transaction_date'] = pd.to_datetime(df['transaction_date'])

    daily_sales = (
        df[df['transaction_date'] < predict_date]
        .groupby(['transaction_date', 'product_id'], as_index=False)['transaction_qty']
        .sum()
        .rename(columns={'transaction_qty': 'daily_qty_sold'})
    )

    temporal_features = df.drop_duplicates(subset=['transaction_date', 'product_id'])[
        ['transaction_date', 'product_id', 'day_of_week', 'month', 'year', 'is_public_holiday', 'is_weekend']
    ]

    predict_df = pd.DataFrame({
        'transaction_date': [predict_date] * len(product_info),
        'product_id': product_info['product_id']
    })

    temporal_predict = temporal_features[temporal_features['transaction_date'] == predict_date]
    if temporal_predict.empty:
        predict_df['day_of_week'] = predict_date.dayofweek
        predict_df['month'] = predict_date.month
        predict_df['year'] = predict_date.year
        predict_df['is_public_holiday'] = False
        predict_df['is_weekend'] = predict_date.dayofweek >= 5
    else:
        predict_df = predict_df.merge(temporal_predict.drop(columns=['transaction_date']), on='product_id', how='left')

    predict_df = predict_df.merge(product_info, on='product_id', how='left')

    # Compute lag features
    daily_sales_sorted = daily_sales.sort_values(['product_id', 'transaction_date'])
    lag_date = predict_date - pd.Timedelta(days=1)
    rolling_start = lag_date - pd.Timedelta(days=3)

    lag_1 = daily_sales_sorted[daily_sales_sorted['transaction_date'] == lag_date][['product_id', 'daily_qty_sold']]
    lag_1 = lag_1.rename(columns={'daily_qty_sold': 'lag_1'})

    rolling = daily_sales_sorted[
        (daily_sales_sorted['transaction_date'] > rolling_start) & (daily_sales_sorted['transaction_date'] < lag_date)
    ]
    rolling_agg = rolling.groupby('product_id')['daily_qty_sold'].agg(['mean', 'std']).reset_index()
    rolling_agg = rolling_agg.rename(columns={'mean': 'rolling_mean_3', 'std': 'rolling_std_3'})

    predict_df = predict_df.merge(lag_1, on='product_id', how='left')
    predict_df = predict_df.merge(rolling_agg, on='product_id', how='left')
    predict_df[['lag_1', 'rolling_mean_3', 'rolling_std_3']] = predict_df[['lag_1', 'rolling_mean_3', 'rolling_std_3']].fillna(0)

    return predict_df

def main():
    print(f"[{datetime.now()}] Starting sales prediction for t+2...")

    try:
        # Load data
        df = pd.read_sql("SELECT * FROM cleaned_data", engine)
        product_info = pd.read_sql("SELECT * FROM product_info", engine)

        # Predict t+2
        predict_date = pd.Timestamp.today().normalize() + pd.Timedelta(days=2)
        X_pred = build_features_for_date(df, product_info, predict_date)

        # Drop transaction_date only
        X_model = X_pred.drop(columns=['transaction_date'])

        # Load model + categorical columns
        model = joblib.load(MODEL_PATH)
        categorical_cols = joblib.load(CATEGORICAL_PATH)

        # Ensure categorical types match training
        for col in categorical_cols:
            if col in X_model.columns:
                X_model[col] = X_model[col].astype('category')

        # Predict
        X_pred['predicted_qty_sold'] = np.ceil(model.predict(X_model)).astype(int)

        # Save result
        X_pred[['transaction_date', 'product_id', 'predicted_qty_sold']].to_sql(
            'daily_sales_predictions', engine, if_exists='append', index=False
        )

        print(f"[{datetime.now()}] ✅ Prediction completed and saved for date: {predict_date.date()}.")

    except Exception as e:
        print(f"[{datetime.now()}] ❌ Model prediction error: {e}")

if __name__ == "__main__":
    main()