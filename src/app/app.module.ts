import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { SharedService } from './shared/shared.service';
import { AuthGuardService } from './auth/auth-guard.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [SharedService,
    AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
