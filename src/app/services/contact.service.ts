import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

import { ContactEmail } from 'src/app/lib/interfaces';

@Injectable({ providedIn: 'root' })
export class ContactService {
  constructor(private http: HttpClient) {}

  sendEmail(email: ContactEmail) {
    return this.http.post<ContactEmail>('http://localhost:3000/api/contact', email);
  }

  // fetchVideos() {
  //   return this.http
  //     .get<YoutubeVideoAPIResponse>('http://localhost:3000/api/videos')
  //     .pipe(
  //       map((response: YoutubeVideoAPIResponse) => {
  //         return response.videos;
  //       })
  //     );
  // }
}
