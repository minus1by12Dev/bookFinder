import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const searchUrl = "http://openlibrary.org/search.json?";
const subjectSearchUrl = "http://openlibrary.org/subjects/";
const bookDetailsUrl = "https://openlibrary.org/api/books?";

@Injectable({
  providedIn: 'root'
})
export class LibraryService {

  constructor(private http: HttpClient) { }

  searchByTitleAuthor(searchType : string, searchString : string, offset : number, limit: number) : Observable<any> { 

    const finalUrl = `${searchUrl}${searchType}=${searchString}&limit=${limit}&$offset=${offset}`;
    console.log(finalUrl);

    return this.http.get(finalUrl);

  }


  searchBySubject(searchString : string, offset : number, limit: number) : Observable<any> {

    const finalUrl = `${subjectSearchUrl}${searchString}.json?limit=${limit}&$offset=${offset}`;
    console.log(finalUrl);

    return this.http.get(finalUrl);
  }


  getBookDetails(bibKey : string) {

    const finalUrl = `${bookDetailsUrl}bibkeys=${bibKey}&jscmd=data&format=json`
    console.log(finalUrl);

    return this.http.get(finalUrl);
  }

}
