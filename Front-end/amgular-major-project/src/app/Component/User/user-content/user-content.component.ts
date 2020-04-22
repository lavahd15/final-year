import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-content',
  templateUrl: './user-content.component.html',
  styleUrls: ['./user-content.component.css']
})
export class UserContentComponent implements OnInit {

  isSubcat: boolean;

  constructor(private router: Router) { }

  ngOnInit() { 
    if (this.router.url.includes("user/subcat")) {
      this.isSubcat = true;
    }
    else if (this.router.url.includes("user/test")) {
      this.isSubcat = false;
    }
  }
  
}
