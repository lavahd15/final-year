import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../../../Services/category.service';
import {SubcategoryService} from '../../../Services/subcategory.service';
import {Form, FormControl, FormGroup, Validators} from '@angular/forms';
import {UploadService} from '../../../Services/upload.service';
import {RequestOptions} from '@angular/http';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-upload-test',
  templateUrl: './upload-test.component.html',
  styleUrls: ['./upload-test.component.css']
})
export class UploadTestComponent implements OnInit {

  categories: any;
  subcategories :any;
  currentFileUpload: File;
  private fileList;
  constructor(private categoryService: CategoryService, private subcategoryService: SubcategoryService,
              private http: HttpClient) { }

  ngOnInit() {
    this.categoryService.getAllCategories().subscribe(response => {
      this.categories = response;
    });
  }
  getSubcategories(categoryId: any) {

    this.subcategoryService.getAllSubcategoryByCategoryId(categoryId.target.value).subscribe( data => {

      this.subcategories = data;
    });
  }

  formElements = new FormGroup({
    categoryId: new FormControl('',
      [Validators.required]
    ),
    subcategoryId: new FormControl('',
      [Validators.required]
    ),

    testName: new FormControl('',[
      Validators.required
    ]),
    time: new FormControl('',[
      Validators.required
    ]),

    marks: new FormControl('',[
      Validators.required
    ]),

    cutoff: new FormControl('',[
      Validators.required
    ]),
    file: new FormControl('',[
      Validators.required
    ])

  });




  selectFile(event)
  {
    this.fileList = event.target.files;
  }

  uploadFile(form:any)
  {



    if(this.fileList.length > 0) {
      let file: File = this.fileList[0];
      let formData:FormData = new FormData();
      formData.append('file', file, file.name);
      formData.append('subcategoryId',form.value.subcategoryId);
      formData.append('testName', form.value.testName);
      formData.append('cutoff', form.value.cutoff);
      formData.append('totalMarks', form.value.marks);



      let httpOptions = {
        headers: new HttpHeaders({

          'Accept': 'application/json'
        })
      };
      this.http.post("http://localhost:8080/test/insert",formData, httpOptions).subscribe(response => {
        console.log(response);
      })

    }
  }


}
