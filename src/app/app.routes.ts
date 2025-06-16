import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ServicesComponent } from './pages/services/services.component';
import { OurWorkComponent } from './pages/our-work/our-work.component';
import { PricingComponent } from './pages/pricing/pricing.component';
import { ReviewComponent } from './pages/review/review.component';
import { VlogsComponent } from './pages/vlogs/vlogs.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AdminEnquiriesComponent } from './pages/admin-enquiries.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'services', component: ServicesComponent },
    {
        path: 'our-work',
        loadComponent: () =>
            import('./pages/our-work/our-work.component').then(
                (m) => m.OurWorkComponent
            ),
    },
    {
        path: 'pricing', loadComponent: () =>
            import('./pages/pricing/pricing.component').then(m => m.PricingComponent),
    },
    { path: 'review', component: ReviewComponent },
    { path: 'vlogs', loadComponent: () => import('./pages/vlogs/vlogs.component').then(m => m.VlogsComponent) },
    { path: 'contact', component: ContactComponent },
    { path: 'admin', component: AdminEnquiriesComponent }

];
