import { ActivatedRoute, Router } from '@angular/router';
import { ResultService } from './../../../Services/result.service';
import { Component, OnInit } from '@angular/core';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  results: any;
  tests: any = [];
  isLoading: boolean = true;
  userid: number = 6;

  constructor(private resultService: ResultService, private route: ActivatedRoute, private router: Router) { }



  ngOnInit() {
    this.resultService.getAllLogsByserId(this.userid).subscribe(response => {
      this.results = response;
      this.isLoading = false;
      console.log(this.results);

      for (let result of this.results) {
        this.resultService.getTestByTestid(result.testId).subscribe(response => {
                    
          this.tests.push(response)

        });
      }

      console.log(this.tests);
      
    });


  }

}
