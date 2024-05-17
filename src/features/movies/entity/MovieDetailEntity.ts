import { getFullImageUrl } from '.';
import { ICast, IKeyword, IMovieDetail, IReview } from '../models/IMovieDetail';

interface IMovieDetailApiEntity {
  id: number;
  overview?: string;
  title?: string;
  poster_path?: string;
  backdrop_path?: string;
  keywords?: {
    keywords?: IKeywordApiEntity[];
  };
  credits: {
    cast?: ICastApiEntity[];
  };
  reviews?: {
    page: number;
    results: IReviewApiEntity[];
    total_pages: number;
    total_reviews: number;
  };
  images?: string[];
  release_date?: string;
  runtime?: number;
}

interface IKeywordApiEntity {
  id: number;
  name: string;
}

interface ICastApiEntity {
  id: number;
  name: string;
  profile_path?: string;
  order: number;
}

interface IReviewApiEntity {
  id: string;
  author: string;
  content: string;
  author_details?: {
    name: string;
    avatar_path?: string;
  };
}

const fromAPIEntityToKeywords = (data?: IKeywordApiEntity[]): IKeyword[] => {
  if (data?.length > 0) {
    let keywords: IKeyword[] = [];
    data.map((d) => {
      const k: IKeyword = {
        id: d.id,
        name: d.name,
      };
      keywords.push(k);
    });
    return keywords;
  }
  return [];
};

const fromAPIEntityToCast = (data?: ICastApiEntity[]): ICast[] => {
  if (data?.length > 0) {
    let cast: ICast[] = [];
    data.map((d) => {
      const k: ICast = {
        id: d.id,
        name: d.name,
        avatar: getFullImageUrl(d.profile_path),
        order: d.order,
      };
      cast.push(k);
    });
    return cast;
  }
  return [];
};

const fromAPIEntityToReviews = (data?: IReviewApiEntity[]): IReview[] => {
  if (data?.length > 0) {
    let reviews: IReview[] = [];
    data.map((d) => {
      const k: IReview = {
        id: d.id,
        author: d.author,
        avatar: getFullImageUrl(d.author_details.avatar_path),
        content: d.content,
      };
      reviews.push(k);
    });
    return reviews;
  }
  return [];
};

export const fromAPIEntityToMovieDetail = (data: IMovieDetailApiEntity): IMovieDetail => ({
  id: data.id,
  overview: data.overview,
  title: data.title,
  poster: getFullImageUrl(data.poster_path),
  backdrop: getFullImageUrl(data.backdrop_path),
  keywords: fromAPIEntityToKeywords(data.keywords?.keywords),
  cast: fromAPIEntityToCast(data.credits?.cast),
  reviews: fromAPIEntityToReviews(data.reviews.results),
  images: [],
  release: data.release_date,
  runtime: data.runtime,
});
