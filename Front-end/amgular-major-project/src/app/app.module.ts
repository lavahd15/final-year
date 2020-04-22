import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './Component/Common/login/login.component';
import { AdminDashboardComponent } from './Component/Admin/admin-dashboard/admin-dashboard.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RegistrationService} from './Services/registration.service';
import { HttpClientModule} from '@angular/common/http';
import { NavbarAdminComponent } from './Component/Admin/navbar-admin/navbar-admin.component';
import { NavbarUserComponent } from './Component/User/navbar-user/navbar-user.component';
import { FooterComponent } from './Component/Common/footer/footer.component';
import { SidebarComponent } from './Component/Common/sidebar/sidebar.component';
import { AdminContentComponent } from './Component/Admin/admin-content/admin-content.component';
import { IntroComponent } from './Component/Common/intro/intro.component';
import { UserDashboardComponent } from './Component/User/user-dashboard/user-dashboard.component';
import { UserContentComponent } from './Component/User/user-content/user-content.component';
import {RouterModule} from '@angular/router';
import { UserSubcatContentComponent } from './Component/User/user-subcat-content/user-subcat-content.component';
import { UserTestContentComponent } from './Component/User/user-test-content/user-test-content.component';
import { LoaderComponent } from './Component/Common/loader/loader.component';
import { TestComponent } from './Component/Common/test/test.component';
import { UploadTestComponent } from './Component/Admin/upload-test/upload-test.component';
import { MyTestComponent } from './Component/User/my-test/my-test.component';
import { ResultsComponent } from './Component/User/results/results.component';
import { UploadedTestComponent } from './Component/Admin/uploaded-test/uploaded-test.component';
import { ReviewComponent } from './Component/Admin/review/review.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminDashboardComponent,
    NavbarAdminComponent,
    NavbarUserComponent,
    FooterComponent,
    SidebarComponent,
    AdminContentComponent,
    IntroComponent,
    UserDashboardComponent,
    UserContentComponent,
    UserSubcatContentComponent,
    UserTestContentComponent,
    LoaderComponent,
    TestComponent,
    UploadTestComponent,
    MyTestComponent,
    ResultsComponent,
    UploadedTestComponent,
    ReviewComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([

      // login page
      {path: '', component: LoginComponent},

      // user side      
      {path: 'user/intro', component: UserDashboardComponent},
      {path: 'user/subcat/:categoryId', component: UserDashboardComponent},
      {path: 'user/test', component: UserDashboardComponent},
      {path: 'user/apply-test', component: UserDashboardComponent},
      {path: 'user/my-test', component: UserDashboardComponent}, 
      {path: 'user/result', component: UserDashboardComponent},
      {path: 'user/test/opt', component: TestComponent},
      // {path: 'user:categoryId', component: UserDashboardComponent},
      // {path: 'user/:categoryId/test/:subcategoryId', component: UserDashboardComponent},

      // admin side
      {path: 'admin/intro', component: AdminDashboardComponent},
      {path: 'admin/upload-test', component: AdminDashboardComponent},
      {path: 'admin/my-uploaded-tests', component: AdminDashboardComponent},
      {path: 'admin/review-test', component: AdminDashboardComponent},

      ],{onSameUrlNavigation: 'reload'}
    )
  ],
  providers: [RegistrationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
