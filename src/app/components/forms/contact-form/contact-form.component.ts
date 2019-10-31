import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { EMAIL_VALIDATOR, FIRST_NAME_VALIDATOR } from 'src/app/lib/validators';

import {
  requiredEmailErrorMsg,
  requiredFirstNameErrorMsg,
  requiredMessageErrorMsg,
  invalidEmailErrorMsg,
  invalidFirstNameErrorMsg,
  invalidMessageErrorMsg
} from 'src/app/lib/error-messages';

import { ContactService } from 'src/app/services/contact.service';

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

  constructor(private contactService: ContactService) {}

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

  public submitContactForm() {
    if (this.contactForm.valid === false) {
      if (this.firstName.valid === false) {
        this.firstName.markAsTouched();
      }
      if (this.email.valid === false) {
        this.email.markAsTouched();
      }
      if (this.message.valid === false) {
        this.message.markAllAsTouched();
      }
      return;
    }

    const contactObj = {
      email: this.email.value,
      firstName: this.firstName.value,
      id: null,
      message: this.message.value
    };

    this.contactService.sendContactMessage(contactObj).subscribe(response => {
      console.log(response);
    });
  }
}
