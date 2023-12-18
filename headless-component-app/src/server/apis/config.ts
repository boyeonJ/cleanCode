import axios, { Axios } from "axios";
import { AxiosRequestConfig, AxiosResponse } from "axios";

const server: Axios = axios.create({
  // baseURL: '',
  // headers: {},
  // timeout: 1000,
});

const http = {
  get: <T = any, R = AxiosResponse<T>, D = any>(
    url: string,
    config?: AxiosRequestConfig<D>
  ): Promise<R> => {
    return server.get(url, config);
  },
  post: <T = any, R = AxiosResponse<T>, D = any>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig<D>
  ): Promise<R> => {
    return server.post(url, data, config);
  },
  put: <T = any, R = AxiosResponse<T>, D = any>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig<D>
  ): Promise<R> => {
    return server.put(url, data, config);
  },
  delete: <T = any, R = AxiosResponse<T>, D = any>(
    url: string,
    config?: AxiosRequestConfig<D>
  ): Promise<R> => {
    return server.delete(url, config);
  },
};

export default http;
