import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  private url = "http://localhost:8080/category/subcategory/all";
  constructor(private Http: HttpClient) {

  }
  getSideBarContent()
  {
    return this.Http.get(this.url);
  }
}
