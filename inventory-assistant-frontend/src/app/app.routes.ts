import { Routes } from '@angular/router';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { SensorDataComponent } from './pages/sensor-data/sensor-data.component';
import {TaskManagementComponent} from './pages/task-management/task-management.component';
import {InventoryComponent} from './pages/inventory/inventory.component';
import {UserProfileComponent} from './pages/user-profile/user-profile.component';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {ActivityLogComponent} from './pages/activity-log/activity-log.component';
import {UserRoleComponent} from './pages/user-role/user-role.component';
import {EditInventoryComponent} from './pages/edit-inventory/edit-inventory.component';
import {NotificationComponent} from './pages/notification/notification.component';
import {AddUserComponent} from './pages/add-user/add-user.component';
import {GlobeComponent} from './pages/globe/globe.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'welcome' },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'sensor-data', component: SensorDataComponent },
  { path: 'inventory', component: InventoryComponent },
  { path: 'task-management', component: TaskManagementComponent },
  { path: 'user-profile', component: UserProfileComponent },
  { path: 'system-activity', component: ActivityLogComponent },
  { path: 'user-role', component: UserRoleComponent },
  { path: 'globe', component: GlobeComponent },
  { path: 'edit-inventory/:id', component: EditInventoryComponent },
  { path: 'notification', component: NotificationComponent },
  { path: 'add-user', component: AddUserComponent }
];
