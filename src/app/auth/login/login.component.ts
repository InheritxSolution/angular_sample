import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
hide = true;
 
 constructor(private router: Router) { }

  ngOnInit() {}

  onSubmit() {
    this.router.navigate(['/admin/listing'])
  }
}