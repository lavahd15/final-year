import { Component, OnInit } from '@angular/core';
import { UploadedtestService } from 'app/Services/uploadedtest.service';
import { TestService } from 'app/Services/test.service';

@Component({
  selector: 'app-uploaded-test',
  templateUrl: './uploaded-test.component.html',
  styleUrls: ['./uploaded-test.component.css']
})
export class UploadedTestComponent implements OnInit {

  
  results = ['one', 'two', 'three', 'four']; //tempArray;

  category = 'Technical';
  subcategory = 'Angular';
  testName = 'Basics of Angular4';
  uploadedOnDate = '22/11/2018';
  quest = 5;
  cutoff = 16;
  time = 10;
  marks = 20;
  percent = 15/25*100;
  responseObject: any = [];

  constructor(private uploadedTest: UploadedtestService, private testService: TestService) { }

  ngOnInit() {
    this.uploadedTest.getAlltests('1').subscribe(response  => {
    console.log(response);
    let responseObj : any = response;
    responseObj.forEach(data => {
      this.testService.getTestByTestId(data['testId']).subscribe(response => {
        this.responseObject.push(response);
        
        
        
      });
    });
    
    });
  }

}
