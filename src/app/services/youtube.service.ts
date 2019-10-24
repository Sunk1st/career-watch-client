import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { YoutubeVideo, YoutubeVideoAPIResponse } from 'src/app/lib/interfaces';

/*** For Youtube API ***/

// import { config } from 'src/app/lib/config';

// const url = `https://www.googleapis.com/youtube/v3/search?
//               key=${config.YOUTUBE_KEY}
//               &channelId=${config.YOUTUBE_ID}
//               &part=snippet`;

@Injectable({ providedIn: 'root' })
export class YoutubeService {
  private videos: YoutubeVideo[];
  private videoSubject = new Subject<YoutubeVideo[]>();

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
