import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource: any
  constructor(private adminService: AdminService) { }

  ngOnInit() {
    this.getList();
  }

  getList() {
    this.adminService.getListingData().then((res) => {
      this.dataSource = res;
    });
  }

}
