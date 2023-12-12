import axios, { Axios } from "axios";
import { AxiosRequestConfig, AxiosResponse } from 'axios';

const server: Axios = axios.create({
    // baseURL: '',
    // headers: {},
    // timeout: 1000,
});

const http = {
    get : <T = any, R = AxiosResponse<T>, D = any>(url: string, config?: AxiosRequestConfig<D>): Promise<R> => {
        return server.get(url, config);
    },
};

export default http;
