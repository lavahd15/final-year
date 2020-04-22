import {AfterContentInit, Component, OnInit} from '@angular/core';
import {SidebarService} from '../../../Services/sidebar.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements AfterContentInit {
  responseObject: any;
  isLoading = true;

  constructor(private sideBarService: SidebarService, private router: Router) {

  }


  ngAfterContentInit(): void {
    this.sideBarService.getSideBarContent().subscribe(response => {
      this.responseObject = response;
      this.isLoading = false;
    });

  }

  submit(subcategoryId, categoryId) {
    this.router.navigate(['/user', 'test'], {
      queryParams: {
        subcategoryId: subcategoryId,
        categoryId: categoryId
      }
    });
  }


}


