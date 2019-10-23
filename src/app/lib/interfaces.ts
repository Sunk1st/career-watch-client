export interface YoutubeVideo {
  career: string;
  created: Date;
  link: string;
  title: string;
  type: string;
}

export interface YoutubeVideoResponse {
  message: string;
  videos: YoutubeVideo[];
}