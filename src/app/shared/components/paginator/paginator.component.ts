import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit {
  @Input() length: number;
  @Input() page: number;
  @Input() limit: number;

  
  
  constructor() { }
  @Output() eventFromPaginator: EventEmitter<any> = new EventEmitter();
  
  ngOnInit() {
  }
  
 }