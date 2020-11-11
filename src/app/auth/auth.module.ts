import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { AuthRouting } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';


@NgModule({
    declarations: [
        LoginComponent,
        ForgotPasswordComponent
],
    imports: [
        AuthRouting,
        CommonModule,
        SharedModule,
        SharedModule,
    ],
    providers: [],
    entryComponents: []
})
export class AuthModule {

    constructor() { }

}
