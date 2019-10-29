import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

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
    return this.contactForm.get('messsage');
  }

  constructor() {}

  ngOnInit() {
    this.contactForm = new FormGroup({
      firstName: new FormControl(''),
      email: new FormControl(''),
      message: new FormControl('')
    });
  }
}
