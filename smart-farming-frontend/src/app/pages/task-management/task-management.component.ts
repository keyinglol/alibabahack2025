import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzCalendarMode, NzCalendarModule } from 'ng-zorro-antd/calendar';
import { NzModalModule, NzModalService } from 'ng-zorro-antd/modal';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { CommonModule } from '@angular/common';

interface CalendarEvent {
  id: number;
  title: string;
  description?: string;
  date: Date;
}

@Component({
  selector: 'app-taskmanagement',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NzCalendarModule,
    NzModalModule,
    NzFormModule,
    NzInputModule,
    NzButtonModule
  ],
  templateUrl: './task-management.component.html',
  styleUrl: './task-management.component.css',
})
export class TaskManagementComponent {

  date = new Date();
  mode: NzCalendarMode = 'month';
  isModalVisible = false;
  modalTitle = 'Add Event';
  selectedDate: Date | null = null;
  currentEvent: CalendarEvent | null = null;
  events: CalendarEvent[] = [];
  eventForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private modalService: NzModalService
  ) {
    this.eventForm = this.fb.group({
      title: [null, [Validators.required]],
      description: [null]
    });
  }

  panelChange(change: { date: Date; mode: string }): void {
    console.log(change.date, change.mode);
  }

  // Handle date selection
  selectDate(date: Date): void {
    this.selectedDate = date;
    this.currentEvent = null;
    this.modalTitle = 'Add Event';
    this.eventForm.reset();
    this.isModalVisible = true;
  }

  // Save event
  saveEvent(): void {
    if (this.eventForm.valid && this.selectedDate) {
      if (this.currentEvent) {
        // Update existing event
        const index = this.events.findIndex(e => e.id === this.currentEvent!.id);
        if (index !== -1) {
          this.events[index] = {
            ...this.currentEvent,
            title: this.eventForm.value.title,
            description: this.eventForm.value.description
          };
        }
      } else {
        // Add new event
        const newEvent: CalendarEvent = {
          id: Date.now(),
          title: this.eventForm.value.title,
          description: this.eventForm.value.description,
          date: new Date(this.selectedDate)
        };
        this.events.push(newEvent);
      }
      this.closeModal();
    }
  }

  // View existing event
  viewEvent(event: CalendarEvent): void {
    this.currentEvent = event;
    this.selectedDate = new Date(event.date);
    this.modalTitle = 'Edit Event';
    this.eventForm.setValue({
      title: event.title,
      description: event.description || null
    });
    this.isModalVisible = true;
  }

  // Get events for a specific date
  getEventsForDate(date: Date): CalendarEvent[] {
    return this.events.filter(event =>
      event.date.getDate() === date.getDate() &&
      event.date.getMonth() === date.getMonth() &&
      event.date.getFullYear() === date.getFullYear()
    );
  }

  // Close the modal
  closeModal(): void {
    this.isModalVisible = false;
    this.currentEvent = null;
  }
}
