import { useQuery } from "@tanstack/react-query";
import { getData } from "../services";
import { VideoType } from "../types/video.types";
import RelatedVideoCard from "./RelatedVideoCard";
import RelatedVideosSkeleton from "./Skeleton/RelatedVideosSkeleton";

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

  return (
    <div>
      {isLoading ? (
        <RelatedVideosSkeleton />
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
