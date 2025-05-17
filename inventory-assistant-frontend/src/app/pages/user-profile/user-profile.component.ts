import { Component } from '@angular/core';
import theme from 'tailwindcss/defaultTheme';
import {FormsModule} from '@angular/forms';
import {DatePipe, NgIf} from '@angular/common';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [
    FormsModule,
    DatePipe,
    NgIf
  ],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {

  editMode = false;

  user = {
    username: 'johndoe',
    email: 'johndoe@example.com',
    role: 'Admin',
    createdAt: new Date('2024-02-01'),
    password: '',
  };

  toggleEdit() {
    this.editMode = !this.editMode;
  }

  saveProfile() {
    // TODO: Add actual save logic (e.g., API call)
    console.log('Profile saved:', this.user);
    this.editMode = false;
    alert('Profile updated successfully!');
  }
}
