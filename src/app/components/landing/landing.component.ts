import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bf-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  haveSearchedOnce : boolean = false;

  constructor() { }

  ngOnInit() {

    this.haveSearchedOnce = false;
  }

}
