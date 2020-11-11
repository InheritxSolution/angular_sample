import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService as AuthGuard } from '../auth/auth-guard.service'
import { LoginComponent } from '../auth/login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';



const authRoutes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'forgotpassword', component: ForgotPasswordComponent },
    
];
export const AuthRouting: ModuleWithProviders = RouterModule.forChild(authRoutes);
