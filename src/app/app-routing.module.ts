import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService as AuthGuard } from '../app/auth/auth-guard.service';


const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full',canActivate: [AuthGuard] },
  { path: 'auth', loadChildren: () => import('../app/auth/auth.module').then(m => m.AuthModule) },
   { path: 'admin', loadChildren: () => import('../app/admin/admin.module').then(m => m.AdminModule) },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
