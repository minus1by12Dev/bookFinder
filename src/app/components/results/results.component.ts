import { Component, OnInit, Input } from '@angular/core';
import { Book } from 'src/app/models/book';

@Component({
  selector: 'bf-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  @Input() books : Array<Book> = [];
  @Input() paginationData : any = {};

  constructor() { }

  ngOnInit() {
  }

}
