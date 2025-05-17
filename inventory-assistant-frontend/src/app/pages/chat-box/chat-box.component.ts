import { Component } from '@angular/core';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-chat-box',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './chat-box.component.html',
  styleUrl: './chat-box.component.css'
})
export class ChatBoxComponent {

  isOpen = false;

  toggleChatbox() {
    this.isOpen = !this.isOpen;
  }

}
