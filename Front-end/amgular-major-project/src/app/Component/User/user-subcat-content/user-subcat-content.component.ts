import {Component, OnInit} from '@angular/core';
import {SubcategoryService} from '../../../Services/subcategory.service';
import {ActivatedRoute, Router} from '@angular/router';
import {CategoryService} from '../../../Services/category.service';
import { TestService } from 'app/Services/test.service';

@Component({
  selector: 'app-user-subcat-content',
  templateUrl: './user-subcat-content.component.html',
  styleUrls: ['./user-subcat-content.component.css']
})
export class UserSubcatContentComponent implements OnInit {

  categoryId: string;
  subcategoryResponse: any;
  categoryName: string;
  isLoading = true;
  testCount: any;
  subcategoryId: string;
  constructor(private subcategoryService: SubcategoryService, private route: ActivatedRoute,
              private categoryServcie: CategoryService, private testService: TestService,
              private router: Router) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.categoryId = params.get('categoryId');
      this.subcategoryId = params['subcategoryId'];

    });
    this.subcategoryService.getAllSubcategoryByCategoryId(this.categoryId).subscribe(response => {

      this.subcategoryResponse = response;
    });

    // this.testService.getTestCountBySubcategoryId(this.subcategoryId).subscribe(response => {
    //   this.testCount = response;
    // });

    this.categoryServcie.getCategoryFromCategroryId(this.categoryId).subscribe(response=>{

      this.categoryName = response['categoryName'];
      this.isLoading = false;
    });


  }
  getTest(subcategoryId: string)
  {
    this.router.navigate(['user/test'], {
      queryParams: {
        categoryId: this.categoryId,
        subcategoryId: subcategoryId
      }
    })
  }


}
