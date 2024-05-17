import { getFullImageUrl } from '.';
import { IMovieData, IMovies } from '../models';

interface IMoviesApiEntity {
  page: number;
  total_pages: number;
  total_results: number;
  results: IMovieEntity[];
}

interface IMovieEntity {
  adult: boolean;
  backdrop_path?: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path?: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

const fromAPIEntityToMovieDatas = (data?: IMovieEntity[]): IMovieData[] => {
  if (data?.length > 0) {
    let movies: IMovieData[] = [];
    data.map((d) => {
      const k: IMovieData = {
        id: d.id,
        title: d.title,
        originalTitle: d.original_title,
        overview: d.overview,
        poster: getFullImageUrl(d.poster_path),
        backdrop: getFullImageUrl(d.backdrop_path),
      };
      movies.push(k);
    });
    return movies;
  }
  return [];
};

export const fromAPIEntityToMovies = (data: IMoviesApiEntity): IMovies => ({
  page: data.page,
  totalPages: data.total_pages,
  totalResults: data.total_results,
  results: fromAPIEntityToMovieDatas(data.results),
});
