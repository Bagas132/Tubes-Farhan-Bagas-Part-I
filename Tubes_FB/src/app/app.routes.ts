import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewColthComponent } from './newColth/newColth.component';
import { EditComponent } from './edit/edit.component';


export const rootRouterConfig: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'newColth', component: DashboardComponent },
  { path: 'details/:id', component: DashboardComponent, }
];