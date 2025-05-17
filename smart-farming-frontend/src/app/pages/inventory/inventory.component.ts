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
      itemName: 'Organic Fertilizer',
      brand: 'AgroGrow',
      category: 'Fertilizer',
      quantity: 50,
      measurementUnit: 'kg',
      status: 'Available',
      lastUpdated: '2025-04-25 10:30 AM'
    },
    {
      itemCode: 'INV002',
      itemName: 'Soil Moisture Sensor',
      brand: 'FarmTech',
      category: 'Sensor',
      quantity: 15,
      measurementUnit: 'pcs',
      status: 'Low Stock',
      lastUpdated: '2025-04-24 02:15 PM'
    },
    {
      itemCode: 'INV003',
      itemName: 'Tomato Seeds',
      brand: 'GreenSeed',
      category: 'Seeds',
      quantity: 200,
      measurementUnit: 'packets',
      status: 'Available',
      lastUpdated: '2025-04-22 11:00 AM'
    },
    {
      itemCode: 'INV004',
      itemName: 'LED Grow Light',
      brand: 'GrowPro',
      category: 'Equipment',
      quantity: 30,
      measurementUnit: 'pcs',
      status: 'Available',
      lastUpdated: '2025-04-23 04:45 PM'
    },
    {
      itemCode: 'INV005',
      itemName: 'Pesticide Spray',
      brand: 'AgroSafe',
      category: 'Pesticide',
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

  //for item details pg
  // { title: 'Added By', key: 'addedBy' }
  // Item Name	Name of the resource or equipment (e.g., Fertilizer A, Sensor Unit)
  // Category	Type of item (e.g., Tool, Fertilizer, Seed, Sensor)
  // Quantity	Available stock or number of units
  // Unit	Measurement unit (e.g., kg, L, pcs)
  // Reorder Level	Threshold quantity that triggers a restock alert
  // Location	Where it's stored (e.g., Warehouse A, Greenhouse 1)
  // Status	Condition or availability (e.g., Available, Low Stock, Out of Stock)
  // Expiry Date	For perishable or chemical items
  // Last Updated	Date/time of last inventory update
  // Added By	User/admin who added/updated the record

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
