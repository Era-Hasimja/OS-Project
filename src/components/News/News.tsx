import { getAllNews } from "@api/news/news";
import { useQuery } from "react-query";

export const News = () => {
  const { data, isLoading, error } = useQuery("comments", getAllNews);

  return (
    <div>
      {data?.data.map(({ id, name, body, email }) => {
        return (
          <div
            key={id}
            className="flex h-48 flex-col items-start gap-1 rounded-lg border-2 border-solid border-white p-1"
          >
            <p className="text-xs font-semibold lg:ml-2 lg:text-base">{name}</p>
            <p>{email}</p>
            <p>{body}</p>
          </div>
        );
      })}
    </div>
  );
};
