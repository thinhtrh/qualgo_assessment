import { AxiosError, AxiosResponse } from "axios";

export interface IInterceptors {
    handleResponse: <T>(response: AxiosResponse<T>) => AxiosResponse<T>;

    handleError: (error: AxiosError) => Promise<any>
}