import {AbstractControl, ValidationErrors} from '@angular/forms';

export class PasswordValidator {

  static passwordMustMatch(control: AbstractControl): ValidationErrors | null {
    let password = control.get('password').value;
    let confirmPassword = control.get('confirmPassword').value;

    if(password === confirmPassword)
    {
      return null;
    }
    else {
      control.get('confirmPassword').setErrors({passwordMustMatch: true});
    }

  }
}
