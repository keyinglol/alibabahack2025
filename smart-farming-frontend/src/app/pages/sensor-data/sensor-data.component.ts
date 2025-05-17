import { Component, OnInit } from '@angular/core';
import {TableComponent} from '../../shared/components/table/table.component';
import {FormsModule} from '@angular/forms';
import {NzOptionComponent, NzSelectComponent} from 'ng-zorro-antd/select';

@Component({
  selector: 'app-welcome',
  standalone: true,
  templateUrl: './sensor-data.component.html',
  imports: [
    TableComponent,
    FormsModule,
    NzSelectComponent,
    NzOptionComponent
  ],
  styleUrls: ['./sensor-data.component.css']
})
export class SensorDataComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

  data = [
    {
      entryId: '1000',
      temperature: '26.5°C',
      humidity: '65%',
      soilMoisture: '45%',
      lightIntensity: '12000 lux',
      createdTime: '2025-04-26 08:15:00'
    },
    {
      entryId: '1001',
      temperature: '24.1°C',
      humidity: '70%',
      soilMoisture: '50%',
      lightIntensity: '9800 lux',
      createdTime: '2025-04-26 08:20:00'
    },
    {
      entryId: '1003',
      temperature: '27.3°C',
      humidity: '60%',
      soilMoisture: '40%',
      lightIntensity: '13400 lux',
      createdTime: '2025-04-26 08:25:00'
    },
    {
      entryId: '1004',
      temperature: '25.7°C',
      humidity: '68%',
      soilMoisture: '47%',
      lightIntensity: '11000 lux',
      createdTime: '2025-04-26 08:30:00'
    },
    {
      entryId: '1005',
      temperature: '23.9°C',
      humidity: '72%',
      soilMoisture: '53%',
      lightIntensity: '9500 lux',
      createdTime: '2025-04-26 08:35:00'
    }
  ];

  columns = [
    { title: 'Entry ID', key: 'entryId', filter: ['1000', '1001', '1003', '1004', '1005'] },
    { title: 'Temperature', key: 'temperature' },
    { title: 'Humidity', key: 'humidity' },
    { title: 'Soil Moisture', key: 'soilMoisture' },
    { title: 'Light Intensity', key: 'lightIntensity' },
    { title: 'Created Time', key: 'createdTime' },
  ];

  filterConditions = { name: '' };
  searchQuery = '';

  onFilterChange(filters: any) {
    this.filterConditions = filters;
  }

  onSortChange(sort: { key: string, value: string }) {
    console.log('Sorting:', sort);
  }

  onSearchChange(query: string) {
    this.searchQuery = query;
  }
}
