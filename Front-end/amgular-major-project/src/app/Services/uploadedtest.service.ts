import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UploadedtestService {
  private url = "http://localhost:8080/usertest/userid/";
  constructor(private http: HttpClient) { }

  getAlltests(userId: string)
  {
    return this.http.get(this.url+'1');
  }

  
}
