import { EMAIL_VALIDATOR } from 'src/app/lib/validators/email/email-validatior';
import { FormControl } from '@angular/forms';

fdescribe('EMAIL_VALIDATOR', () => {
  it('should return null with jack@aol.com', () => {
    const testCase = new FormControl('jack@aol.com', EMAIL_VALIDATOR);
    console.log(testCase);
  });
});
