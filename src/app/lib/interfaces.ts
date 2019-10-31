export interface ContactMessage{
  firstName: string;
  id: number;
  email: string;
  message: string;
}

export interface Email {
  email: string;
}

export interface YoutubeVideo {
  career: string;
  created: Date;
  id: number;
  link: string;
  title: string;
  type: string;
}

export interface YoutubeVideoAPIResponse {
  message: string;
  videos: YoutubeVideo[];
}
