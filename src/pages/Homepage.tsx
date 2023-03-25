import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import VideoListSkeleton from "../components/Skeleton/VideoListSkeleton";
import Videos from "../components/Videos";
import { getData } from "../services";

function Homepage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "bmw";

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["videos", query],
    queryFn: () => getData(`/search?part=snippet,id&q=${query}&maxResults=50`),
  });

  return (
    <div>
      {isLoading ? (
        <VideoListSkeleton />
      ) : isError ? (
        <div>Error Happenend</div>
      ) : (
        <Videos videos={data?.items} />
      )}
    </div>
  );
}

export default Homepage;
