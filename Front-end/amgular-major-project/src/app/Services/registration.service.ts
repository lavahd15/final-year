import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  private  url = "http://localhost:8080/user/";
  private UserInserted;
  constructor(private http: HttpClient) {
  }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };

  checkUniqueUser(username){
    return this.http.get(this.url+'name/exists/'+username,this.httpOptions);
  }

  registerUser(User) {
    //console.log(User);
    this.UserInserted = {
      dob: User.dob,
      email: User.email,
      gender: User.gender,
      name: User.name,
      password: User.passwordCheck.password,
      userType: User.usertype,
      username: User.username

    };
    console.log(this.UserInserted);
    return this.http.post(this.url+'insert',JSON.stringify(this.UserInserted));
  }
}
