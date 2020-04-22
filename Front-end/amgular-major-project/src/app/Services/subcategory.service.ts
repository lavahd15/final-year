import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SubcategoryService {
  private url = "http://localhost:8080/subcategory/";
  constructor(private http: HttpClient) { }

  getAllSubcategoryByCategoryId(categoryId: string){
    return this.http.get(this.url+'category/id/'+categoryId);
  }
  getSubcategoryBySubCategoryId(subcategoryId: string){
    return this.http.get(this.url+'id/'+subcategoryId);
  }
}
