import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent {

  isApplyTest: boolean = false;
  isIntro: boolean = false;
  isDash: boolean = false;
  isMyTest: boolean = false;
  isResult: boolean = false;

  constructor(private router: Router) { }

  ngOnInit() {
    if (this.router.url.includes("user/apply-test")) {
      this.isApplyTest = true;
    }
    else if (this.router.url.includes("user/intro")) {
      this.isIntro = true;
    }
    else if (this.router.url.includes("user/subcat") || this.router.url.includes("user/test")) {
      this.isDash = true;
    }
    else if (this.router.url.includes("user/my-test")) {
      this.isMyTest = true;
    }
    else if (this.router.url.includes("user/result")) {
      this.isResult = true;
    }

  }

}
