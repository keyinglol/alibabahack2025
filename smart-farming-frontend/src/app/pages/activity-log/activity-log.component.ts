import { Component } from '@angular/core';
import {TableComponent} from '../../shared/components/table/table.component';

@Component({
  selector: 'app-activity-log',
  standalone: true,
  imports: [
    TableComponent
  ],
  templateUrl: './activity-log.component.html',
  styleUrl: './activity-log.component.css'
})
export class ActivityLogComponent {

  constructor() { }

  ngOnInit() { }

  data = [
    {
      entryId: '1000',
      user: 'Admin',
      action: 'Sensor Data Updated',
      device: 'Greenhouse Sensor 1',
      status: 'Success',
      timestamp: '2025-04-30 12:45:23',
    },
    {
      entryId: '1001',
      user: 'Farmer John',
      action: 'System Restarted',
      device: 'Greenhouse Controller',
      status: 'Success',
      timestamp: '2025-04-30 13:00:01',
    },
    {
      entryId: '1002',
      user: 'Admin',
      action: 'Threshold Adjusted',
      device: 'Temperature Sensor',
      status: 'Success',
      timestamp: '2025-04-30 13:10:15',
    },
    {
      entryId: '1003',
      user: 'Farmer Jane',
      action: 'Alert Acknowledged',
      device: 'Soil Moisture Sensor 3',
      status: 'Acknowledged',
      timestamp: '2025-04-30 14:30:40',
    },
    {
      entryId: '1004',
      user: 'Admin',
      action: 'Scheduled Irrigation Triggered',
      device: 'Irrigation System 5',
      status: 'Success',
      timestamp: '2025-04-30 15:15:10',
    },
  ];

  columns = [
    { title: 'Entry ID', key: 'entryId', filter: ['1000', '1001', '1002', '1003', '1004'] },
    { title: 'User', key: 'user' },
    { title: 'Action', key: 'action' },
    { title: 'Device', key: 'device' },
    { title: 'Status', key: 'status' },
    { title: 'Timestamp', key: 'timestamp' },
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
