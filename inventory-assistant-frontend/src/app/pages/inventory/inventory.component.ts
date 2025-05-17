import { Component } from '@angular/core';
import {TableComponent} from '../../shared/components/table/table.component';
import {NzTagComponent} from 'ng-zorro-antd/tag';
import {Router} from '@angular/router';

@Component({
  selector: 'app-inventory',
  standalone: true,
  imports: [
    TableComponent,
    NzTagComponent
  ],
  templateUrl: './inventory.component.html',
  styleUrl: './inventory.component.css'
})
export class InventoryComponent {

  constructor(private router: Router) { }

  ngOnInit() { }

  data = [
    {
      itemCode: 'INV001',
      itemName: 'Coffee',
      brand: 'AgroCoffee',
      category: 'Drinks',
      quantity: 50,
      measurementUnit: 'packets',
      status: 'Available',
      lastUpdated: '2025-04-25 10:30 AM'
    },
    {
      itemCode: 'INV002',
      itemName: 'Tea',
      brand: 'FarmTea',
      category: 'Drinks',
      quantity: 15,
      measurementUnit: 'packets',
      status: 'Low Stock',
      lastUpdated: '2025-04-24 02:15 PM'
    },
    {
      itemCode: 'INV003',
      itemName: 'Bakery',
      brand: 'GreenSeedBake',
      category: 'Bake',
      quantity: 200,
      measurementUnit: 'packets',
      status: 'Available',
      lastUpdated: '2025-04-22 11:00 AM'
    },
    {
      itemCode: 'INV004',
      itemName: 'Milk',
      brand: 'GrowPro',
      category: 'Drinks',
      quantity: 30,
      measurementUnit: 'cartons',
      status: 'Available',
      lastUpdated: '2025-04-23 04:45 PM'
    },
    {
      itemCode: 'INV005',
      itemName: 'Drinking Chocolate',
      brand: 'DutchLily',
      category: 'Drinks',
      quantity: 10,
      measurementUnit: 'L',
      status: 'Out of Stock',
      lastUpdated: '2025-04-20 09:00 AM'
    }
  ];

  columns = [
    { title: 'Item Code', key: 'itemCode' },
    { title: 'Item Name', key: 'itemName' },
    { title: 'Brand', key: 'brand' },
    { title: 'Category', key: 'category' },
    { title: 'Quantity', key: 'quantity' },
    { title: 'Measurement unit', key: 'measurementUnit' },
    { title: 'status', key: 'status' },
    { title: 'Last Updated', key: 'lastUpdated' },
  ];

  filterConditions = { name: '' };
  searchQuery = '';

  getStatusColor(value: string): string {
    switch (value) {
      case 'Available':
        return 'green';
      case 'Low Stock':
        return 'orange';
      case 'Out of Stock':
        return 'red';
      default:
        return 'gray';
    }
  }


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
    console.log('Editing record:', record);
    this.router.navigate(['/edit-inventory', record.itemCode]); // Replace with actual route
  }

  onDelete(record: any) {

  }

  onAddInventory() {

  }
}
