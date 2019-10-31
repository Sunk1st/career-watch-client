import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';

import { ContactMessage, Email } from 'src/app/lib/interfaces';

@Injectable({ providedIn: 'root' })
export class ContactService {
  constructor(private http: HttpClient) {}

  addToEmailList(email: Email) {
    return this.http.post<Email>('http://localhost:3000/api/email', email).pipe(
      map(response => {
        return response;
      })
    );
  }

  sendContactMessage(contactMessage: ContactMessage) {
    return this.http
      .post<ContactMessage>('http://localhost:3000/api/contact', contactMessage)
      .pipe(
        map(response => {
          return response;
        })
      );
  }
}
