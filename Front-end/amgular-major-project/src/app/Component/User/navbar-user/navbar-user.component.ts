import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar-user',
  templateUrl: './navbar-user.component.html',
  styleUrls: ['./navbar-user.component.css']
})
export class NavbarUserComponent implements OnInit {


  username = "Rahul";

  constructor(private router: Router) { }

  ngOnInit() {
  }
  getAllTests(userId: string) {
    this.router.navigate(['user/my-test'],{
      queryParams: {
        userId: userId
      }
    });
  }

}
