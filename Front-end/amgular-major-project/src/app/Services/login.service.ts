import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private url = "http://localhost:8080/";
  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };

  login(credentials)
  {
    let loginObject = {
      username: credentials.username,
      password: credentials.password,
      userType: credentials.userType
    };
    console.log(JSON.stringify(loginObject));
    console.log(credentials);
    return this.http.post(this.url+"token/generate", JSON.stringify(loginObject), this.httpOptions).subscribe(

    )
  }

}
