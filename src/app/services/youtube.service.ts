import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

import { YoutubeVideoAPIResponse } from 'src/app/lib/interfaces';

@Injectable({ providedIn: 'root' })
export class YoutubeService {

  constructor(private http: HttpClient) {}

  fetchVideos() {
    return this.http
      .get<YoutubeVideoAPIResponse>('http://localhost:3000/api/videos')
      .pipe(
        map((response: YoutubeVideoAPIResponse) => {
          return response.videos;
        })
      );
  }
}
