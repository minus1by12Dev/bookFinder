import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'bf-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  @Input() paginationData :  {} = [];


  constructor() { }

  ngOnInit() {
  }

}
