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
            className="flex flex-col items-start gap-1 rounded-lg border-2 border-solid border-white p-1"
          >
            <p>{name}</p>
            <p>{email}</p>
            <p>{body}</p>
          </div>
        );
      })}
    </div>
  );
};
