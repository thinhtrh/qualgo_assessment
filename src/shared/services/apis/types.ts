export type RequestStatus = 'fetching' | 'success' | 'failed';

export interface RequestResponse<T> {
  status: RequestStatus;
  data?: T;
  error?: any;
}
