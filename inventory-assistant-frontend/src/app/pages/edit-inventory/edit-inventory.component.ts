import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {NzInputDirective} from 'ng-zorro-antd/input';
import {NzOptionComponent, NzSelectComponent} from 'ng-zorro-antd/select';
import {NzButtonComponent} from 'ng-zorro-antd/button';
import {NzTableComponent} from 'ng-zorro-antd/table';
import {NgForOf} from '@angular/common';

export interface Inventory {
  itemCode: string;
  itemName: string;
  category: string;
  brand: string;
  quantity: number;
  measurementUnit: string;
  status: string;
  lastUpdated: string;
  description?: string; // optional
}

export interface InventoryLog {
  date: string;
  quantityChange: number;
  note: string;
}


@Component({
  selector: 'app-edit-inventory',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NzInputDirective,
    NzOptionComponent,
    NzSelectComponent,
    NzButtonComponent,
    NzTableComponent,
    NgForOf
  ],
  templateUrl: './edit-inventory.component.html',
  styleUrl: './edit-inventory.component.css'
})
export class EditInventoryComponent {

  inventoryForm!: FormGroup;
  inventoryLogs: InventoryLog[] = [];

  sampleInventory: Inventory = {
    itemCode: 'INV001',
    itemName: 'Organic Fertilizer',
    category: 'Fertilizer',
    brand: 'AgroGrow',
    quantity: 50,
    measurementUnit: 'kg',
    status: 'Available',
    lastUpdated: '2025-04-25 10:30 AM',
    description: 'Natural organic fertilizer suitable for all crops.'
  };

  sampleLogs: InventoryLog[] = [
    { date: '2025-04-20', quantityChange: +30, note: 'Restocked' },
    { date: '2025-04-22', quantityChange: -10, note: 'Used for Test Batch A' },
    { date: '2025-04-24', quantityChange: +20, note: 'Supplier Delivery' }
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.inventoryForm = this.fb.group({
      itemCode: [{ value: '', disabled: true }],
      itemName: ['', Validators.required],
      category: ['', Validators.required],
      brand: ['', Validators.required],
      quantity: [0, [Validators.required, Validators.min(0)]],
      measurementUnit: ['', Validators.required],
      status: ['', Validators.required],
      lastUpdated: [{ value: '', disabled: true }],
      description: [''],
    });

    this.loadInventoryData();
  }

  loadInventoryData() {
    // Replace with actual API call later
    this.inventoryForm.patchValue(this.sampleInventory);
    this.inventoryLogs = this.sampleLogs;
  }

  onSubmit() {
    if (this.inventoryForm.valid) {
      const updatedData = this.inventoryForm.getRawValue();
      console.log('Saving inventory...', updatedData);
      // Call API to save updated inventory here
    }
  }
}
