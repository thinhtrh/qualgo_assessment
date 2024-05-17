import { Apis } from '@shared/services/apis';
import { AxiosError } from 'axios';

export class MoviesApis extends Apis {
  handleError = (error: AxiosError<unknown, any>): Promise<any> => {
    return Promise.reject();
  };
}
