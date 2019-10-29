import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { EMAIL_VALIDATOR } from 'src/app/lib/validators/email/email-validatior';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  contactForm: FormGroup;

  constructor() {}

  ngOnInit() {
    this.contactForm = new FormGroup({
      firstName: new FormControl(''),
      email: new FormControl('', EMAIL_VALIDATOR),
      message: new FormControl('')
    });
  }

  public submitForm() {
    console.log(this.contactForm, 'Submitting');
  }
}
