import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { AuthGuardService as AuthGuard } from '../auth/auth-guard.service'
import { AdminComponent } from './admin.component';
import {ListingComponent} from './list/listing.component'

const adminRoutes: Routes = [
    {
        path: '', component: AdminComponent,
        children: [
        {
            path: 'listing',
          component: ListingComponent,
      
        },
       
        ]
    },

];
export const AdminRouting: ModuleWithProviders = RouterModule.forChild(adminRoutes);
