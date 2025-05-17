import { Component } from '@angular/core';
import {TableComponent} from "../../shared/components/table/table.component";
import {NzTagComponent} from 'ng-zorro-antd/tag';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-role',
  standalone: true,
  imports: [
    TableComponent,
    NzTagComponent
  ],
  templateUrl: './user-role.component.html',
  styleUrl: './user-role.component.css'
})
export class UserRoleComponent {


  constructor(private router: Router) { }

  ngOnInit() { }

  data = [
    {
      userId: 'U1001',
      username: 'johndoe',
      role: 'Admin',
      status: 'Active',
      lastLogin: '2025-04-29 10:30:15',
      createdTime: '2024-01-01 08:00:00',
    },
    {
      userId: 'U1002',
      username: 'janedoe',
      role: 'Farmer',
      status: 'Active',
      lastLogin: '2025-04-30 09:00:25',
      createdTime: '2024-03-15 10:05:12',
    },
    {
      userId: 'U1003',
      username: 'adminuser',
      role: 'Admin',
      status: 'Inactive',
      lastLogin: '2025-03-15 14:20:50',
      createdTime: '2023-08-05 14:50:00',
    },
    {
      userId: 'U1004',
      username: 'farmerjohn',
      role: 'Farmer',
      status: 'Active',
      lastLogin: '2025-04-28 17:25:34',
      createdTime: '2023-11-11 16:00:00',
    },
    {
      userId: 'U1005',
      username: 'adminalex',
      role: 'Admin',
      status: 'Active',
      lastLogin: '2025-04-30 12:12:00',
      createdTime: '2023-02-20 08:45:00',
    },
  ];


  columns = [
    { title: 'User ID', key: 'userId', filter: ['U1001', 'U1002', 'U1003', 'U1004', 'U1005'] },
    { title: 'Username', key: 'username' },
    { title: 'Role', key: 'role' },
    { title: 'Last Login', key: 'lastLogin' },
    { title: 'Created Time', key: 'createdTime' },
  ];


  getStatusColor(value: string): string {
    switch (value) {
      case 'Admin':
        return 'green';
      case 'Farmer':
        return 'orange';
      default:
        return 'gray';
    }
  }


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

  onEdit(record: any) {

  }

  onAddUser() {
    this.router.navigate(['/add-user']);
  }
}
