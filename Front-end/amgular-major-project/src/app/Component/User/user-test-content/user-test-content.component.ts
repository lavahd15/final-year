import {ActivatedRoute, Router} from '@angular/router';
import {TestService} from './../../../Services/test.service';
import {Component, OnInit} from '@angular/core';
import {CategoryService} from '../../../Services/category.service';
import {SubcategoryService} from '../../../Services/subcategory.service';

@Component({
  selector: 'app-user-test-content',
  templateUrl: './user-test-content.component.html',
  styleUrls: ['./user-test-content.component.css']
})
export class UserTestContentComponent implements OnInit {

  subcategoryId: string;
  testResponse: any;
  isLoading = true;
  categoryName :string;
  categoryId;
  subcategoryName: string;
  constructor(private testService: TestService, private route: ActivatedRoute,
              private categoryService:CategoryService, private subcategoryService: SubcategoryService,
              private router: Router) {
  }

  ngOnInit() {

    this.route.queryParams.subscribe(params => {
      this.subcategoryId = params['subcategoryId'];
      this.categoryId = params['categoryId'];
      this.isLoading= true;
      this.reloadContent();

    });


  }

  reloadContent() {
    this.testService.getAllTestsBySubcategoryId(this.subcategoryId).subscribe(response => {

      if(response == null){
        document.getElementById("noTest").innerHTML="No Records Found";
      }
      else {
      this.testResponse = response;
      console.log(this.testResponse);
      }
    });

    this.categoryService.getCategoryFromCategroryId(this.categoryId).subscribe(response =>{
      this.categoryName = response['categoryName'];
    },error1 => {
      alert('an unexpected error occured');
    });

    this.subcategoryService.getSubcategoryBySubCategoryId(this.subcategoryId).subscribe(response =>{

      this.subcategoryName = response['subcategoryName'];
      this.isLoading = false;
    });
  }

  startTest(testId: string) {
      this.router.navigate(['user/test/opt'],{
        queryParams: {
          testId: testId
        }
      });
  }

}
