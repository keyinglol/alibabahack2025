import {Component, EventEmitter, Input, Output, TemplateRef} from '@angular/core';
import {NzThAddOnComponent} from 'ng-zorro-antd/table';
import {NgForOf, NgIf, NgTemplateOutlet} from '@angular/common';
import {NzPaginationComponent} from 'ng-zorro-antd/pagination';
import {FormsModule} from '@angular/forms';
import {NzTableModule} from 'ng-zorro-antd/table';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    NzTableModule,
    NgForOf,
    NzPaginationComponent,
    FormsModule,
    NzThAddOnComponent,
    NgIf,
    NgTemplateOutlet,
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
  //currently is frontend pagination, switch to backend pagination if necessary
  @Input() data: any[] = [];
  @Input() columns: any[] = [];
  @Input() filterConditions: any = {};  // Filters passed from parent component
  @Input() searchQuery: string = ''; // Search text passed from parent
  @Input() customRenderers: { [key: string]: TemplateRef<any> } = {};
  @Input() rowActionTemplate?: TemplateRef<any>;

  @Output() filterChange = new EventEmitter<any>();
  @Output() sortChange = new EventEmitter<any>();
  @Output() searchChange = new EventEmitter<string>();


  pageIndex = 1;
  pageSize = 10;

  sortColumn: string = '';
  sortOrder: 'ascend' | 'descend' | null = null;

  // Method to trigger sorting
  paged: any;

  onSortChange(columnKey: string, sortOrder: string | null): void {
    this.sortColumn = columnKey;
    this.sortOrder = sortOrder as 'ascend' | 'descend' | null;
    this.sortChange.emit({ key: this.sortColumn, value: this.sortOrder });
  }

  // Method to trigger filter changes
  onFilterChange(filters: any): void {
    this.filterConditions = filters;
    this.filterChange.emit(filters);
  }

  // Method to trigger search text change
  onSearchChange(query: string): void {
    this.searchQuery = query;
    this.searchChange.emit(query);
  }

  // Get filtered and sorted data
  get filteredData() {
    return this.data
      .filter(row => {
        // Apply search filtering across all columns
        if (this.searchQuery) {
          const searchLower = this.searchQuery.toLowerCase();
          // Check if any column in this row contains the search query
          return this.columns.some(column => {
            const cellValue = row[column.key];
            // Convert cell value to string and check if it includes the search text
            return cellValue !== null &&
              cellValue !== undefined &&
              String(cellValue).toLowerCase().includes(searchLower);
          });
        }
        return true;
      })
      .filter(row => {
        // Apply other filters
        let pass = true;
        for (const key in this.filterConditions) {
          if (this.filterConditions[key] && row[key] !== this.filterConditions[key]) {
            pass = false;
          }
        }
        return pass;
      })
      .sort((a, b) => {
        if (this.sortColumn) {
          if (this.sortOrder === 'ascend') {
            return a[this.sortColumn] > b[this.sortColumn] ? 1 : -1;
          } else if (this.sortOrder === 'descend') {
            return a[this.sortColumn] < b[this.sortColumn] ? 1 : -1;
          }
        }
        return 0;
      });
  }

  // Get paged data based on pageIndex and pageSize
  get pagedData() {
    const start = (this.pageIndex - 1) * this.pageSize;
    const end = this.pageIndex * this.pageSize;
    this.paged = this.filteredData.slice(start, end);
    console.log('Filtered Data:', this.paged.length);
    return this.paged;
  }

  // Update the pageIndex when pagination control is changed
  onPageIndexChange(pageIndex: number): void {
    this.pageIndex = pageIndex;
  }
}
