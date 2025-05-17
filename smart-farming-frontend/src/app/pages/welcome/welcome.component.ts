import { Component, AfterViewInit } from '@angular/core';
import {NzButtonComponent} from 'ng-zorro-antd/button';
import {NzIconDirective} from 'ng-zorro-antd/icon';
import {
  Chart,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';

// Register the necessary components
Chart.register(
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
  Tooltip,
  Legend,
  Filler
);
@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [
    NzButtonComponent,
    NzIconDirective
  ],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent implements AfterViewInit{
  ngAfterViewInit(): void {
    this.initTempChart();
    this.initHumidityChart();
  }

  private initTempChart() {
    const ctx = (document.getElementById('tempChart') as HTMLCanvasElement).getContext('2d')!;
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['6 AM', '9 AM', '12 PM', '3 PM', '6 PM', '9 PM'],
        datasets: [{
          label: '°C',
          data: [18, 21, 24, 23, 20, 17],
          fill: false,
          tension: 0.4
        }]
      }
    });
  }

  private initHumidityChart() {
    const ctx = (document.getElementById('humidityChart') as HTMLCanvasElement).getContext('2d')!;
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['6 AM', '9 AM', '12 PM', '3 PM', '6 PM', '9 PM'],
        datasets: [{
          label: '%',
          data: [55, 60, 58, 62, 65, 63],
          fill: false,
          tension: 0.4
        }]
      }
    });
  }
}
