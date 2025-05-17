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
    { title: 'Out of stock alert: Drinking Chocolate inventory has reached zero.' },
    { title: 'Sales milestone reached: Latte sales has hit a new high.' },
    { title: 'Restock reminder: Please replenish 12 packets of tea.' },
    { title: 'Restock reminder: Please replenish 20 carton of drinking chocolate.' }
  ];

  isNotificationDrawerVisible = false;

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
