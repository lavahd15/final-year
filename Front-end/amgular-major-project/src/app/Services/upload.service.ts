import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Form} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UploadService {
  private url ="http://localhost:8080/test/";
  constructor(private http: HttpClient) { }

  pushFileToStorage(form:any) {
    let formData: FormData = new FormData();
    console.log(form);
    /*
    categoryId: "1"
    cutoff: 6
    file: "C:\fakepath\database1.xlsx"
    marks: 10
    subcategoryId: "4"
    testName: "Bootstrap"
    time: 20*/
    formData.append('file',form.getfile);
    formData.append('subcategoryId',form.subcategoryId);
    formData.append('testName', form.testName);
    formData.append('cutoff', form.cutoff);
    formData.append('totalMarks', form.marks);

    let headers = new Headers();
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json');

    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'multipart/form-data',
        'Accept': 'application/json'
      })
    };



    return this.http.post(this.url+"insert",formData, httpOptions);
  }
}
