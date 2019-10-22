import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { config } from 'src/app/lib/config';

const url = `https://www.googleapis.com/youtube/v3/search?
              key=${config.YOUTUBE_KEY}
              &channelId=${config.YOUTUBE_ID}
              &part=snippet`;

@Injectable({ providedIn: 'root' })
export class YoutubeService {
  constructor(private http: HttpClient) {}

  getHomeData() {
    return this.http.get(url);
  }
}
