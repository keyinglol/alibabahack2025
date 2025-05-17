import { Routes } from '@angular/router';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import {InventoryComponent} from './pages/inventory/inventory.component';
import {UserProfileComponent} from './pages/user-profile/user-profile.component';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {ActivityLogComponent} from './pages/activity-log/activity-log.component';
import {NotificationComponent} from './pages/notification/notification.component';
import {GlobeComponent} from './pages/globe/globe.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'welcome' },
  { path: 'welcome', component: GlobeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'inventory', component: InventoryComponent },
  { path: 'notification', component: NotificationComponent },
];
