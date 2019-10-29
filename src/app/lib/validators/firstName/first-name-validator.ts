import { FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';

export const FIRST_NAME_VALIDATOR: ValidatorFn = (
  control: FormGroup
): ValidationErrors | null => {
  const firstNameRegex = /^[a-z ,.'-]+$/i;

  return firstNameRegex.test(control.value)
    ? null
    : { errorMessage: 'Please Enter a Valid First Name' };
};
