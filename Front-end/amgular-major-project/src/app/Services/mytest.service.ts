import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {category} from '../model/category';
import {CategoryService} from './category.service';

@Injectable({
  providedIn: 'root'
})
export class MytestService {

  private url = "http://localhost:8080/test/";
  private userTestUrl = "http://localhost:8080/usertest/";
  private subcategoryUrl = "http://localhost:8080/subcategory/";
  private categoryUrl = "http://localhost:8080/category/";
  constructor(private Http: HttpClient) { }

  getTestByUserId(userId: string){
    return this.Http.get(this.userTestUrl+"userid/"+userId);
  }

  // getSubcategoryIdBytestId(testId: string){
  //   let subcategoryId;
  //   let subcategoryName;
  //   this.Http.get(this.url+"subcategory/test/"+testId).subscribe(response =>{
  //
  //     subcategoryId = response;
  //     this.getCategoryIdBysubcategoryId(subcategoryId);
  //     this.getSubcategoryNameBysubcategoryId(subcategoryId).subscribe(response =>{
  //       subcategoryName = response['subcategoryName'];
  //       console.log(subcategoryName);
  //       return subcategoryName;
  //
  //     });
  //   });
  //
  // }

  getSubcategoryIdBytestId(testId: string) {
    return this.Http.get(this.url+"subcategory/test/"+testId);
  }

  getCategoryIdBysubcategoryId(subcategoryId: string)
  {
    let categoryId;
    this.Http.get(this.subcategoryUrl+"category/"+subcategoryId).subscribe(response =>{
      console.log("category:"+response);
      categoryId = JSON.stringify(response);
      this.getCategoryNameByCategoryId(categoryId).subscribe( response =>{
        return response['categoryName'];
      });
    });

  }

  getSubcategoryNameBysubcategoryId(subcategoryId: string)
  {
    return this.Http.get(this.subcategoryUrl+"id/"+subcategoryId);
  }

  getCategoryNameByCategoryId(categoryId: string) {
    return this.Http.get(this.categoryUrl+"id/"+categoryId);
  }

  getTestByTestid(testId: string) {
    return this.Http.get(this.url+"id/"+testId);
  }



}
