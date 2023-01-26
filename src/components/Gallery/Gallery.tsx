import { getAllGallerys } from "@api/gallery/gallery";
import { useQuery } from "react-query";

export const Gallery = () => {
  const { data, isLoading, error } = useQuery("photos", getAllGallerys);

  return (
    <div>
      {data?.data.map(({ id, title, url, thumbnailUrl }) => {
        return (
          <div
            className="flex flex-col items-start gap-1 rounded-lg border-2 border-solid border-white p-1"
            key={id}
          >
            <p className="text-xs font-semibold lg:ml-2 lg:text-base">
              {title}
            </p>
            <p>{url}</p>
            <p>{thumbnailUrl}</p>
          </div>
        );
      })}
    </div>
  );
};
