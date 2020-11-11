import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url: string;


  constructor(private http: HttpClient) {
    this.url = environment.Base_URL + '/admin/';
  }

  //admin login
  adminLogin(admin: any) {
    return this.http.post(this.url + 'login', admin);
  }

  //admin logout
  adminLogout() {

    return this.http.delete(this.url + 'logout');
  }

  //admin forgot password
  adminForgotPassword(email: string) {
    return this.http.post(this.url + 'forgotpassword', email);
  }

  //reset password
  adminResetPassword(adminPassword: string) {
    return this.http.post(this.url + 'resetpassword', adminPassword);
  }

  //change password
  adminChangePassword(admin: any) {
    return this.http.put(this.url + 'changepassword', admin);
  }

  //get token
  getToken() {
    return localStorage.getItem('token');
  }

  //check token is null or not
  isAuthenticated() {
    let token = this.getToken();


    if (token) {
      return token;
    } else return null;
  }
}
