import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  
  results = ['one', 'two', 'three', 'four']; //tempArray;

  category = 'Technical';
  subcategory = 'Angular';
  testName = 'Basics of Angular4';
  uploadedOnDate = '22/11/2018';
  userName = 'rahulPandya';
  appearedOn = '24/11/2018'

  constructor() { }

  ngOnInit() {
  }

}
