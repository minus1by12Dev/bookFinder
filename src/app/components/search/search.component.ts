import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'bf-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  selectedType : string = "Search By";
  hasSelectedType : boolean = false;

  selectionError : boolean = false;

  @Input() goThin? : string;
  @Output() searchEvent : EventEmitter<any> = new EventEmitter<any>();

  constructor(private toastr: ToastrService) { }

  ngOnInit() {
  }

  selectForSearch(selectedType : string) {

    this.selectedType = selectedType;
    this.hasSelectedType = true;
  }

  findTheBook(searchText) {

    // searchText = "lord of the rings";
    // this.hasSelectedType = true;
    // this.selectedType = 'title';

    console.log(searchText);
    if(searchText === "") {
      this.toastr.warning("Book with no title & Author with no name don't want to be found!!");
      return false;
    } else if(searchText !== "") {

      if(!this.hasSelectedType) {

        this.toastr.warning("Please select a Search type from the dropdown!!");
        this.selectionError = true;

        setTimeout(() => this.selectionError = false, 3000);

        return false;
      } 

      // If everything is fine, we would emit an event to get the books
      this.searchEvent.emit({searchText : searchText, selectedType : this.selectedType});
    }
  }

}
