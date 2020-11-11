import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {
  @Output() searchEvent = new EventEmitter<any>();
  @Input() labelFlag: any;
  label: any
  constructor() { }

  ngOnInit() {
   
  }
  applyFilter(filterValue: string) {
    if (filterValue === null) {
      filterValue = '';
    }
    
    this.searchEvent.emit(filterValue);
  }
  
}
