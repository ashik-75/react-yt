import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import RelatedVideos from "../components/RelatedVideos";
import VideoDetailsSkeleton from "../components/Skeleton/VideoDetailsSkeleton";
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
      <div>
        <div className="grid sm:grid-cols-6 gap-10">
          <div className="sm:col-span-4 ">
            {isLoading ? (
              <VideoDetailsSkeleton />
            ) : isError ? (
              <div>Error</div>
            ) : (
              <VideoPlayer video={data?.items?.[0]} />
            )}
          </div>

          <div className="sm:col-span-2">
            <RelatedVideos videoId={videoId!} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoDetails;
