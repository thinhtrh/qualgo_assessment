import { IMAGE_URL } from '@env';
import { fromAPIEntityToMovieDetail } from './MovieDetailEntity';
import { fromAPIEntityToMovies } from './MoviesEntity';

const getFullImageUrl = (path?: string): string => {
  if (!path) return null;
  return IMAGE_URL + path;
};

export { fromAPIEntityToMovieDetail, getFullImageUrl, fromAPIEntityToMovies };
