import Axios, { AxiosRequestConfig, AxiosResponse } from "axios";
export interface News {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: number;
}

export interface NewsResponse {
  users: News[];
  total: number;
  skip: number;
  limit: number;
}

export interface Gallery {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

export interface GalleryResponse {
  users: Gallery[];
  total: number;
  skip: number;
  limit: number;
}
export async function apiRequest<D = {}, R = unknown>({
  url,
  method,
  data,
  headers,
  params,
  responseType,
}: AxiosRequestConfig<D>) {
  return await Axios.request<D, AxiosResponse<R>>({
    url: `${import.meta.env.VITE_API_URL}/${url}`,
    method,
    data,
    headers,
    params,
    responseType,
  });
}
