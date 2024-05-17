export interface IMovieDetail {
  id: number;
  overview?: string;
  title?: string;
  poster?: string;
  backdrop?: string;
  keywords?: IKeyword[];
  cast?: ICast[];
  reviews?: IReview[];
  images?: string[];
  release?: string;
  runtime?: number;
}

export interface ICast {
  name?: string;
  id: number;
  avatar?: string;
  order?: number;
}

export interface IReview {
  id: string;
  author?: string;
  avatar?: string;
  content?: string;
}

export interface IKeyword {
  id: number;
  name?: string;
}
