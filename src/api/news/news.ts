import { apiRequest, News, NewsResponse } from "@api/Api";

export const getAllNews = () => apiRequest<{}, News[]>({ url: "comments" });
