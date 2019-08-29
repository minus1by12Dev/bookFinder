import { Component, OnInit } from '@angular/core';
import { LibraryService } from 'src/app/services/library.service';
import { Book } from 'src/app/models/book';

@Component({
  selector: 'bf-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  goThin : boolean = false;
  haveSearchedOnce : boolean = false;

  books : Array<Book> = [];
  paginationData = {
    offset : 0, 
    bookCount : 0
  }

  constructor(private libraryService : LibraryService) { }

  ngOnInit() {
    this.haveSearchedOnce = false;
  }

  requestForSearch(searchData : any) {
    console.log(searchData);

    if(searchData.selectedType === 'subject') {
      this.libraryService.searchBySubject(searchData.searchText, 0, 20).subscribe(
        bookData => this.arrangeBooks(bookData)
      )
    } else {

      this.libraryService.searchByTitleAuthor(searchData.selectedType, searchData.searchText, 0, 20).subscribe(
        bookData => this.arrangeBooks(bookData)
      )
    }
  }

  arrangeBooks(bookData) {
    console.log(bookData);

    this.books = bookData.docs;
    
    this.paginationData.bookCount = bookData.numFound;
    this.paginationData.offset = bookData.start;

    if(this.books.length > 0) {
      this.haveSearchedOnce = true;
      this.goThin = true;
    }
  }

}
