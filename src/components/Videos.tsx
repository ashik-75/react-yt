import { VideoType } from "../types/video.types";
import ChannelCard from "./ChannelCard";
import VideoCard from "./VideoCard";

function Videos({ videos }: { videos: VideoType[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
      {videos.map((video) =>
        video?.id?.videoId ? (
          <VideoCard key={video.id.videoId} {...video} />
        ) : (
          <ChannelCard key={video.snippet.channelId} {...video} />
        )
      )}
    </div>
  );
}

export default Videos;
