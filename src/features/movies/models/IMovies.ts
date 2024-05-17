import { IMovieData } from './IMovieData';

export interface IMovies {
  page: number;
  totalPages: number;
  totalResults: number;
  results: IMovieData[];
}
