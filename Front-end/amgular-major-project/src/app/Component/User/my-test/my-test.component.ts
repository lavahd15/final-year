import { Component, OnInit } from '@angular/core';
import {MytestService} from '../../../Services/mytest.service';
import {ActivatedRoute} from '@angular/router';
import {forEach} from '@angular/router/src/utils/collection';
import {MyTestModel} from '../../../model/myTestModel';

@Component({
  selector: 'app-my-test',
  templateUrl: './my-test.component.html',
  styleUrls: ['./my-test.component.css']
})
export class MyTestComponent implements OnInit {

  userId: string;
  testObject : any = [];

  constructor(private myTestService: MytestService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.userId = params['userId'];
    });
    this.myTestService.getTestByUserId(this.userId).subscribe(response =>{
      console.log(response);
      let testObj: any = response;

      testObj.forEach(data =>{

        this.myTestService.getTestByTestid(data['testId']).subscribe( response =>{
          console.log(response);
          this.testObject.push(response);
        });

      });


    });

  }
  


}
