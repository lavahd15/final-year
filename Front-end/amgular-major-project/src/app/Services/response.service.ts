import { forEach } from '@angular/router/src/utils/collection';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResponseService {

  private url = "http://localhost:8080/response/"

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };

  insertResponse(responseList) {
    this.http.post(this.url+"insert",JSON.stringify(responseList),this.httpOptions).subscribe(response => {});
  }
}
