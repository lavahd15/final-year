import { Component, OnInit } from '@angular/core';
import {IntroService} from '../../../Services/intro.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {

  isUser: boolean = false;
  isAdmin: boolean = false;

  responseObject: any;
  isLoading = true;
  constructor(private introService: IntroService, private router: Router) { }

  ngOnInit() {

    if (this.router.url.includes("admin")) {
      this.isAdmin = true;
    }

    else if (this.router.url.includes("user")) {
      this.isUser = true;

      this.introService.getAllCategories().subscribe(response =>{
        this.responseObject = response;
        this.isLoading= false;
      },error1 => {
        alert('an unexpected error occured');
        console.log(error1);
      });
    }

  this.introService.getAllCategories().subscribe(response =>{
    this.responseObject = response;
    this.isLoading= false;
  },error1 => {
    alert('an unexpected error occured');
    console.log(error1);
  });
  }


}
