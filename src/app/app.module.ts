import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { ResultsComponent } from './components/results/results.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchComponent } from './components/search/search.component';
import { BookComponent } from './components/book/book.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { RegisterComponent } from './components/register/register.component';
import { FooterComponent } from './components/footer/footer.component';
import { LibraryService } from './services/library.service';
import { UserService } from './services/user.service';
import { DataService } from './services/data.service';

import { HttpClientModule } from '@angular/common/http';
import { LandingComponent } from './components/landing/landing.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import {NgbPaginationModule, NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    PaginationComponent,
    ResultsComponent,
    HeaderComponent,
    SearchComponent,
    BookComponent,
    BookDetailsComponent,
    DashboardComponent,
    CarouselComponent,
    RegisterComponent,
    FooterComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
	  ToastrModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    NgbPaginationModule, 
    NgbDropdownModule
  ],
  providers: [LibraryService, UserService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
