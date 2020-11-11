import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from '../../shared.service';
declare var mLayout;
declare var $
declare var toastr
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

constructor(
  private router: Router,private SharedService: SharedService,private route : ActivatedRoute) {
  }

  ngOnInit() {
  }
  logout(){
    this.router.navigate(['/auth/login']) 
  }

  ngAfterViewInit() {
    mLayout.init();
  }
}
