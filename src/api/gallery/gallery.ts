import { apiRequest, Gallery, NewsResponse } from "@api/Api";

export const getAllGallerys = () =>
  apiRequest<{}, Gallery[]>({ url: "photos" });
