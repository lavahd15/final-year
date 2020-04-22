import {AbstractControl, ValidationErrors} from '@angular/forms';

export class EmailValidators {
  static invalidEmail(control: AbstractControl): ValidationErrors | null {
    let pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(pattern.test(control.value as string))
    {
      return null;
    }
    else
      return({invalidEmail: true})
  }
}
