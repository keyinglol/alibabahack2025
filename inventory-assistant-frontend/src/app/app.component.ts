import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import {NzDropDownDirective, NzDropdownMenuComponent } from 'ng-zorro-antd/dropdown';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import {NzBadgeComponent} from 'ng-zorro-antd/badge';
import {NzListComponent, NzListEmptyComponent, NzListItemComponent, NzListItemMetaComponent} from 'ng-zorro-antd/list';
import {NzDrawerComponent, NzDrawerContentDirective} from 'ng-zorro-antd/drawer';
import {ChatBoxComponent} from './pages/chat-box/chat-box.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet, NzIconModule, NzLayoutModule, NzMenuModule, NzDropDownDirective, NzDropDownModule, NzDropdownMenuComponent, NzBadgeComponent, NzListComponent, NzDrawerComponent, NzListItemComponent, NzListItemMetaComponent, NzListEmptyComponent, NzDrawerContentDirective, ChatBoxComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isCollapsed = false;

  notifications = [
    { title: 'Sensor Alert', description: 'Soil moisture is too low in Zone 1' },
    { title: 'Task Due', description: 'Irrigation task pending for today' },
  ];

  isNotificationDrawerVisible = false;
  //notifications = []; // Your notification data would go here

  openNotificationDrawer(): void {
    this.isNotificationDrawerVisible = true;
  }

  closeNotificationDrawer(): void {
    this.isNotificationDrawerVisible = false;
  }

  markAsRead(id: string): void {
    // Implementation to mark notification as read
  }

}
