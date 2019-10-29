import { FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';

export const EMAIL_VALIDATOR: ValidatorFn = (
  control: FormGroup
): ValidationErrors | null => {
  // tslint:disable-next-line:max-line-length
  const emailRegex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  return emailRegex.test(control.value)
    ? null
    : { errorMessage: 'Please Enter a Valid Email Address' };
};
