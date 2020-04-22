import { ResponseService } from './../../../Services/response.service';
import { Router, ActivatedRoute } from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { TestService } from './../../../Services/test.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  
  responseObject: any;
  isLoading: boolean = true;
  testId: number;
  responseList: any = [];
  userId: number = 6;

  constructor(private responseService: ResponseService, private testService: TestService, private route: ActivatedRoute, private router: Router) { }

  ngAfterContentInit(): void {
    alert("Are you sure you want to start test!");

    this.testService.getTestByTestId(this.testId).subscribe(response => {
      this.responseObject = response;
      this.isLoading = false;
  });
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => this.testId = params['testId']);
  }

  onSubmit(form: any): void {
    alert("Are you sure you want to Submit test!");
    this.addResponsesToList(form);
    this.responseService.insertResponse(this.responseList);
    
  }


  addResponsesToList(form: any){
    let temp = JSON.stringify(form);
    JSON.parse(temp, (key,value) => {
      this.responseList.push({'userId': ""+this.userId+"", 'questionId': key, 'response': value});
    });
    this.responseList.pop();
  }

}
