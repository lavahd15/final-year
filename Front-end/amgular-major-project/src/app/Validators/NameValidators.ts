import {AbstractControl, ValidationErrors} from '@angular/forms';

export class NameValidators {
  static shouldNotContainNumbers(control: AbstractControl): ValidationErrors | null {
    if (/\d/.test(control.value as string)) {

      return {shouldNotContainNumbers: true};
    }
    else
      return null;
  }
}

