import { Component, OnInit } from '@angular/core';
import { YoutubeService } from 'src/app/services/youtube.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private youtubeService: YoutubeService) {}

  public currentData: Observable<any>;

  ngOnInit() {
    this.getData();
  }

  private getData(): void {
    this.youtubeService.getVideos();
  }
}
