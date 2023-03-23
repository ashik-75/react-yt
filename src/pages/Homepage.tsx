import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import Sidebar from "../components/Sidebar";
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
      <div className="grid grid-cols-12 ">
        <div className="col-span-2 border-r p-5 h-[calc(100vh-104px)] overflow-y-scroll scrollbar-hide">
          <Sidebar />
        </div>
        <div className="col-span-10 p-5  h-[calc(100vh-104px)] overflow-y-scroll scrollbar-hide">
          {isLoading ? (
            <div>Loading ...</div>
          ) : isError ? (
            <div>Error Happenend</div>
          ) : (
            <Videos videos={data?.items} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Homepage;
