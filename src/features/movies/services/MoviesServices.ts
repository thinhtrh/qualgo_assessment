import { RequestResponse } from '@shared/services/apis';
import { fromAPIEntityToMovieDetail, fromAPIEntityToMovies } from '../entity';
import { IMovieDetail, IMovieDetailRequest } from '../models';
import { IMovies } from '../models/IMovies';
import { IMoviesRequest } from '../models/IMoviesRequest';
import { MoviePaths } from './Constants';
import { MoviesApis } from './MoviesApis';

export const getMovies = async (request: IMoviesRequest): Promise<RequestResponse<IMovies>> => {
  const response: RequestResponse<IMovies> = { status: 'fetching' };
  const res = await new MoviesApis().get(MoviePaths.queryMovies, request);
  if (res.status == 200) {
    response.status = 'success';
    if (res.data) {
      res.data.results = res.data.results.slice(0, 10);
      response.data = fromAPIEntityToMovies(res.data);
    }

    return response;
  }
  response.status = 'failed';
  return response;
};

export const getMovieDetail = async (movieId: number): Promise<RequestResponse<IMovieDetail>> => {
  const response: RequestResponse<IMovieDetail> = { status: 'fetching' };
  const request: IMovieDetailRequest = {
    append_to_response: 'credits,reviews,keywords,images',
  };
  const path = `${MoviePaths.movieDetail}/${movieId}`;

  const res = await new MoviesApis().get(path, request);
  if (res.status == 200) {
    response.status = 'success';
    response.data = fromAPIEntityToMovieDetail(res.data);
    return response;
  }
  response.status = 'failed';
  return response;
};
