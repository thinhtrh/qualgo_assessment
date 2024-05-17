import { API_TOKEN, API_URL } from '@env';
import { MoviePaths } from '@features/movies/services';
import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios';
import { IInterceptors } from './IInterceptors';

export class Apis implements IInterceptors {
  private service: AxiosInstance;

  constructor() {
    const _service = axios.create({
      baseURL: API_URL,
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
        'Content-Type': 'application/json',
      },
    });

    _service.interceptors.response.use(this.handleResponse, this.handleError);

    this.service = _service;
  }

  handleResponse = <T>(response: AxiosResponse<T, any>): AxiosResponse<T, any> => {
    return response;
  };

  //TODO implement later
  handleError = (error: AxiosError<unknown, any>): Promise<any> => {
    switch (error.response.status) {
      case 401:
        // Token expired
        break;
      case 404:
        // Not found
        break;
      default:
        // Internal server error
        break;
    }

    return Promise.reject(error);
  };

  private createQueryString = <T>(path: string, params?: T): string => {
    if (!params) return path;
    return (
      `${path}?` +
      Object.keys(params)
        .map((key) => {
          let value = params[key];
          // TODO get movies require query key, trick to query movies
          if (path == MoviePaths.queryMovies && key == 'query' && !value) {
            const randomKey = (Math.random() + 1).toString(36).substring(2, 3);
            value = randomKey;
          }
          return `${key}=${encodeURIComponent(value)}`;
        })
        .join('&')
    );
  };

  public get = async <T>(path: string, params?: T): Promise<AxiosResponse> => {
    path = this.createQueryString(path, params);
    const res = await this.service.get(path);

    //TODO TEST delay 1s to response [remove later]
    return new Promise((resolve) => setTimeout(() => resolve(res), 1000));
  };
}
