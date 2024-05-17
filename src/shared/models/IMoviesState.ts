import { IMovieData, IMovieDetail } from '@features/movies/models';

export interface IMoviesState {
  isFetching: boolean;
  discoveryMovies: IMovieData[];
  searchMovies: IMovieData[];
  discoveryPage: number;
  query?: string;
  totalDiscoveryPage: number;
  searchPage: number;
  totalSearchPage: number;
  selectedMovie: IMovieDetail;
}
