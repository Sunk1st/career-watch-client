import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { EMAIL_VALIDATOR } from 'src/app/lib/validators/email/email-validatior';
import { FIRST_NAME_VALIDATOR } from 'src/app/lib/validators/firstName/first-name-validator';

import {
  requiredEmailErrorMsg,
  requiredFirstNameErrorMsg,
  requiredMessageErrorMsg,
  invalidEmailErrorMsg,
  invalidFirstNameErrorMsg,
  invalidMessageErrorMsg
} from 'src/app/lib/error-messages';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  contactForm: FormGroup;

  get firstName() {
    return this.contactForm.get('firstName');
  }

  get email() {
    return this.contactForm.get('email');
  }

  get message() {
    return this.contactForm.get('message');
  }

  ngOnInit() {
    this.contactForm = new FormGroup({
      firstName: new FormControl('', [
        Validators.required,
        FIRST_NAME_VALIDATOR
      ]),
      email: new FormControl('', [Validators.required, EMAIL_VALIDATOR]),
      message: new FormControl('', [Validators.required])
    });
  }

  public getFirstNameError() {
    return this.firstName.value === ''
      ? requiredFirstNameErrorMsg
      : invalidFirstNameErrorMsg;
  }

  public getEmailError() {
    return this.email.value === ''
      ? requiredEmailErrorMsg
      : invalidEmailErrorMsg;
  }

  public getMessageError() {
    return this.message.value === ''
      ? requiredMessageErrorMsg
      : invalidMessageErrorMsg;
  }

  public submitForm() {
    console.log(this.contactForm, 'Submitting');
  }
}
