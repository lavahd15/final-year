import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IntroService {
  private url = "http://localhost:8080/category/all";
  constructor(private http: HttpClient) { }

  getAllCategories() {
    return this.http.get(this.url);
  }
}
