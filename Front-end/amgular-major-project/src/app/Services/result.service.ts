import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResultService {

  private url = "http://localhost:8080/log/";
  private testUrl = "http://localhost:8080/test/";

  constructor(private http: HttpClient) { }

  getAllLogsByserId(userid: number) {
    return this.http.get(this.url+"id/"+userid);
  }

  getTestByTestid(testId: string) {
    return this.http.get(this.testUrl+"id/"+testId);
  }
}
