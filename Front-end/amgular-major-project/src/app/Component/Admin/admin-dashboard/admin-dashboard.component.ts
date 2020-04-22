import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  isIntro: boolean = false;
  isMyTest: boolean = false;
  isReview: boolean = false;
  isUploadTest: boolean = false;

  constructor(private router: Router) { }

  ngOnInit() {
    if (this.router.url.includes("admin/intro")) {
      this.isIntro = true;
    }
    else if (this.router.url.includes("admin/my-uploaded-tests")) {
      this.isMyTest = true;
    }
    else if (this.router.url.includes("admin/review-test")) {
      this.isReview = true;
    }
    else if (this.router.url.includes("admin/upload-test")) {
      this.isUploadTest = true;
    }

  }
}
