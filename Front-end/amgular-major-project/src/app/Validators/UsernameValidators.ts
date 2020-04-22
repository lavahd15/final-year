import {AbstractControl, AsyncValidatorFn, FormControl, ValidationErrors, ValidatorFn} from '@angular/forms';
import {RegistrationService} from '../Services/registration.service';


export class UsernameValidators {
  constructor(public registrationService: RegistrationService) {
  }

  static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
    if ((control.value as string).indexOf(' ') >= 0) {
      return {cannotContainSpace: true};

    }
    return null;
  }

  static shouldBeUnique(registrationService: RegistrationService): AsyncValidatorFn {
    return (control: AbstractControl): Promise<ValidationErrors | null> => {
      return new Promise((resolve, reject) => {
        registrationService.checkUniqueUser(control.value as string)
          .subscribe((response) => {
            if(response == false){
              resolve({userExists: true});
            }
            else
              resolve(null);
          });
      });
    };

  }



}
