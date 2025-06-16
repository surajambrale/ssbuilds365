import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AdminEnquiriesComponent } from './pages/admin-enquiries.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'admin', component: AdminEnquiriesComponent }

];
