import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { YoutubeVideo, YoutubeVideoResponse } from 'src/app/lib/interfaces';

/*** For Youtube API ***/

// import { config } from 'src/app/lib/config';

// const url = `https://www.googleapis.com/youtube/v3/search?
//               key=${config.YOUTUBE_KEY}
//               &channelId=${config.YOUTUBE_ID}
//               &part=snippet`;

@Injectable({ providedIn: 'root' })
export class YoutubeService {
  constructor(private http: HttpClient) {}

  getVideos() {
    this.http
      .get<YoutubeVideoResponse>('http://localhost:3000/api/videos')
      .subscribe((videoData) => {
        console.log(videoData);
      });
  }
}
