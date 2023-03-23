import { useQuery } from "@tanstack/react-query";
import { getData } from "../services";
import { VideoType } from "../types/video.types";
import RelatedVideoCard from "./RelatedVideoCard";

function RelatedVideos({ videoId }: { videoId?: string }) {
  const {
    data: relatedVideos,
    isError,
    isSuccess,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["relatedVideos", videoId],
    queryFn: () => getData(`/search?relatedToVideoId=${videoId}`),
  });

  console.log("RELATED VIDEOS: ", { relatedVideos, isError, isSuccess, error });
  return (
    <div>
      {isLoading ? (
        <div>Loading ...</div>
      ) : isError ? (
        <div>Wrong happen</div>
      ) : (
        <div className="space-y-3">
          {relatedVideos?.items.map((video: VideoType) => (
            <RelatedVideoCard key={video.id.videoId} {...video} />
          ))}
        </div>
      )}
    </div>
  );
}

export default RelatedVideos;
