import { AxiosInstance, AxiosRequestConfig } from 'axios';

export interface ApiResponse<T> {
  data?: T;
}

export interface HttpClient {
  get<T>(
    url: string,
    params?: any,
    config?: AxiosRequestConfig,
  ): Promise<ApiResponse<T>>;
  post<T>(
    url: string,
    data: any,
    config?: AxiosRequestConfig,
  ): Promise<ApiResponse<T>>;
  put<T>(
    url: string,
    data: any,
    config?: AxiosRequestConfig,
  ): Promise<ApiResponse<T>>;
  patch<T>(
    url: string,
    data: any,
    config?: AxiosRequestConfig,
  ): Promise<ApiResponse<T>>;
  delete<T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig,
  ): Promise<ApiResponse<T>>;
  axiosInstance: AxiosInstance;
}
