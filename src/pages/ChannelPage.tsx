import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import ChannelDetails from "../components/ChannelDetails";
import VideoListSkeleton from "../components/Skeleton/VideoListSkeleton";
import Videos from "../components/Videos";
import { getData } from "../services";

function ChannelPage() {
  const { channelId } = useParams() || {};
  const {
    data: channelData,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["channel", channelId],
    queryFn: () => getData(`/channels?part=snippet,statistics&id=${channelId}`),
  });

  const {
    data: channelVideos,
    isLoading: isVLoading,
    isError: isVError,
    error: VError,
  } = useQuery({
    queryKey: ["channelVideos", channelId],
    queryFn: () =>
      getData(`/search?channelId=${channelId}&part=snippet,id&maxResults=50`),
  });

  return (
    <div className="space-y-10">
      <div>
        {isLoading ? (
          <div>Loading...</div>
        ) : isError ? (
          <div>Error</div>
        ) : (
          <ChannelDetails data={channelData?.items?.[0]} />
        )}
      </div>

      <div>
        {isVLoading ? (
          <VideoListSkeleton item={4} />
        ) : isVError ? (
          <div>Error</div>
        ) : (
          <Videos videos={channelVideos?.items} />
        )}
      </div>
    </div>
  );
}

export default ChannelPage;
