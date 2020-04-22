import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private url="http://localhost:8080/category/";
  constructor(private  http: HttpClient) { }

  getCategoryFromCategroryId(categoryId: string){
    return this.http.get(this.url+'id/'+categoryId);
  }

  getAllCategories() {
    return this.http.get(this.url+"all");
  }
}
