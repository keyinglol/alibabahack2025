import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    NgIf
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  credentials = {
    username: '',
    password: '',
  };

  errorMessage: string | null = null;

  constructor(private router: Router) {}

  onLogin() {
    // Replace with real authentication logic
    if (this.credentials.username === 'admin' && this.credentials.password === 'admin123') {
      this.router.navigate(['/dashboard']); // Redirect to your main page
    } else {
      this.errorMessage = 'Invalid username or password';
    }
  }

}
