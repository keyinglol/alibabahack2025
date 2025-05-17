import { Component } from '@angular/core';
import {NgIf} from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-reporting',
  standalone: true,
  imports: [
    NgIf,
    FormsModule
  ],
  templateUrl: './reporting.component.html',
  styleUrl: './reporting.component.css'
})
export class ReportingComponent {

  report = {
    reportType: '',
    reportPeriod: '',
    selectedDate: '',
  };

  reportGenerated = false;

  onGenerateReport() {
    console.log('Report request:', this.report);

    // Simulate backend call
    setTimeout(() => {
      this.reportGenerated = true;
    }, 1000);

    // You can replace the above with an actual HTTP request to backend
  }
}
