import axios from 'axios';
import { PlainObject } from "../types/object-literal.type";
import { BASE_URL } from "../constants/endpoints.const";

const http = axios.create({
  baseURL: BASE_URL,
  headers: {"Content-Type": "application/json"},
  timeout: 25000,
});

export const HttpService = {
  get(path: string, httpParams: URLSearchParams = new URLSearchParams(), httpHeaders: Headers = new Headers()): Promise<unknown> {
    return http.get(path, {params: httpParams, ...httpHeaders});
  },

  post(path: string, httpParams: URLSearchParams = new URLSearchParams(),  httpHeaders: Headers = new Headers(), body: PlainObject): Promise<unknown> {
    return http.post(path, body, {params: httpParams, ...httpHeaders});
  },

  put(path: string, httpParams: URLSearchParams = new URLSearchParams(),  httpHeaders: Headers = new Headers(), body: PlainObject): Promise<unknown> {
    return http.put(path, body, {params: httpParams, ...httpHeaders});
  },

  delete(path: string, httpParams: URLSearchParams = new URLSearchParams(),  httpHeaders: Headers = new Headers()): Promise<unknown> {
    return http.delete(path, {params: httpParams, ...httpHeaders});
  },
}