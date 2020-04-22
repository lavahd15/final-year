import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  private url = "http://localhost:8080/test/";

  constructor(private http: HttpClient) { }

  getAllTestsBySubcategoryId( subcategoryId: string ){
    return this.http.get(this.url+"subcategory/id/"+subcategoryId);
  }

  // getTestCountBySubcategoryId( subcategoryId: string ){
  //   return this.http.get(this.url+"subcategory/id/"+subcategoryId+"/count");
  // }

  getTestByTestId( testId: number ){
    return this.http.get(this.url+"id/"+testId);
  }
}
