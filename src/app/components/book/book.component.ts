import { Component, OnInit, Input } from '@angular/core';
import { Book } from 'src/app/models/book';

@Component({
  selector: 'bf-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  @Input() book : Book;

  constructor() { }

  ngOnInit() {
  }

}
