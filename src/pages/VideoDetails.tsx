import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import RelatedVideos from "../components/RelatedVideos";
import { default as VideoPlayer } from "../components/VideoPlayer";
import { getData } from "../services";

function VideoDetails() {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");
  const { data, isLoading, isError, error, isSuccess } = useQuery({
    queryKey: ["video", videoId],
    queryFn: () => getData(`/videos?id=${videoId}`),
    enabled: videoId ? true : false,
  });

  return (
    <div className="max-w-7xl mx-auto p-5">
      {isLoading ? (
        <div>Loading....</div>
      ) : isError ? (
        <div>Something went wrong</div>
      ) : (
        <div>
          <div className="grid grid-cols-6 gap-10">
            <div className="col-span-4 ">
              <VideoPlayer video={data?.items?.[0]} />
            </div>

            <div className="col-span-2">
              <RelatedVideos videoId={videoId!} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default VideoDetails;
