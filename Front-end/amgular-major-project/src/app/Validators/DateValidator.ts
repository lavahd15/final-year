import {AbstractControl, ValidationErrors} from '@angular/forms';

export class DateValidator {
  static cannotBeFuture(control: AbstractControl): ValidationErrors | null {

    let inputDate = new Date(control.value as string);
    let currentDate = new Date();
    if (inputDate > currentDate) {
      return ({cannotBeFuture: true});
    } else {
      return null;

    }

  }
}
