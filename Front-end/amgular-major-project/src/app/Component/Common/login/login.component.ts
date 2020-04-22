import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UsernameValidators} from '../../../Validators/UsernameValidators';
import {RegistrationService} from '../../../Services/registration.service';
import {NameValidators} from '../../../Validators/NameValidators';
import {EmailValidators} from '../../../Validators/EmailValidators';
import {PasswordValidator} from '../../../Validators/PasswordValidator';
import {DateValidator} from '../../../Validators/DateValidator';
import {LoginService} from '../../../Services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private registrationService: RegistrationService, private loginService: LoginService) {
  }

  formElements = new FormGroup({
    username: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(20),
        UsernameValidators.cannotContainSpace,
      ],
      [UsernameValidators.shouldBeUnique(this.registrationService)]
    ),
    name: new FormControl('', [
      Validators.required,
      Validators.maxLength(255),
      NameValidators.shouldNotContainNumbers
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.maxLength(255),
      EmailValidators.invalidEmail
    ]),
    passwordCheck: new FormGroup({
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(20),

      ]),
      confirmPassword: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(20),

      ])
    }, PasswordValidator.passwordMustMatch),
    dob: new FormControl('', [
      Validators.required,
      DateValidator.cannotBeFuture
    ]),
    gender: new FormControl(),
    usertype: new FormControl()
  });

  loginFormElements = new FormGroup({
    username: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required]),
    userType: new FormControl()
  });
  get username() {
    return this.formElements.get('username');
  }

  get name() {

    return this.formElements.get('name');
  }

  get email() {
    return this.formElements.get('email');
  }

  get passwordCheck() {
    return this.formElements.get('passwordCheck');
  }

  get password() {
    return this.formElements.get('passwordCheck.password');
  }

  get confirmPassword() {
    return this.formElements.get('passwordCheck.confirmPassword');
  }

  get dob() {
    return this.formElements.get('dob');
  }

  get gender() {
    return this.formElements.get('gender');
  }

  get usertype() {
    return this.formElements.get('usertype');
  }



  registerUser() {
    this.registrationService.registerUser(this.formElements.getRawValue()).subscribe(
      response => {
        console.log(response);
      },
      error1 => {
        alert('an unexpected error occurred');
      }
    )
  }

  toggle(clickedLabel) {
    var login = document.getElementById('login--form');
    var register = document.getElementById('registration--form');


    login.classList.remove('active');
    register.classList.remove('active');
    login.classList.remove('inactive');
    register.classList.remove('inactive');

    if (clickedLabel.id == 'login-check') {
      login.classList.add('active');
      register.classList.add('inactive');
    }
    else if (clickedLabel.id == 'register-check') {
      register.classList.add('active');
      login.classList.add('inactive');
    }
  }

  loginUser()
  {
    console.log(this.loginFormElements.getRawValue());
    //this.loginService.login(this.loginFormElements.getRawValue());
    window.location.href = '/user/intro'
  }

}
