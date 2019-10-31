import { Component, OnInit } from '@angular/core';
import { YoutubeService } from 'src/app/services/youtube.service';
import { YoutubeVideo } from 'src/app/lib/interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private youtubeService: YoutubeService) {}

  public currentVideos: YoutubeVideo[];
  public isLoading = false;

  ngOnInit() {
    this.fetchVideos();
  }

  private fetchVideos(): void {
    this.isLoading = true;
    this.youtubeService.fetchVideos().subscribe((response: YoutubeVideo[]) => {
      this.isLoading = false;
      this.currentVideos = this.sortVideosByDate(response)
        .slice(response.length - 4, response.length)
        .reverse();
    });
  }

  private sortVideosByDate(videoList: YoutubeVideo[]): YoutubeVideo[] {
    return videoList.sort((a, b) => {
      const dateA = new Date(a.created);
      const dateB = new Date(b.created);
      return dateA.getTime() - dateB.getTime();
    });
  }
}
