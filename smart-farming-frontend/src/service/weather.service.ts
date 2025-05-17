// src/app/services/weather.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiKey = 'af335a8687ba35f880c492d4be53cdf5';
  private apiUrl = 'https://api.openweathermap.org/data/2.5/onecall';

  constructor(private http: HttpClient) {}

  getWeatherForecast(lat: number, lon: number): Observable<any> {
    // const url = `${this.apiUrl}?lat=${lat}&lon=${lon}&exclude=hourly,minutely,current,alerts&units=metric&appid=${this.apiKey}`;
    const url = `https://api.openweathermap.org/data/2.5/forecast?id=524901&appid=af335a8687ba35f880c492d4be53cdf5`;
    return this.http.get<any>(url);
  }
}
