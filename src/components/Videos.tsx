import { VideoType } from "../types/video.types";
import VideoCard from "./VideoCard";

function Videos({ videos }: { videos: VideoType[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
      {videos.map((video) => (
        <VideoCard key={video.id.videoId} {...video} />
      ))}
    </div>
  );
}

export default Videos;
