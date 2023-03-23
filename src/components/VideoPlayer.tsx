import { ThumbsUp } from "lucide-react";
import ReactPlayer from "react-player";
import { VideoDetailsType } from "../types/video.types";

function VideoPlayer({ video }: { video: VideoDetailsType }) {
  const { id, snippet, statistics } = video || {};

  console.log({ video });
  return (
    <div>
      <div className="bg-purple-600 aspect-video">
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${id}`}
          playing={true}
          controls={true}
          width={"100%"}
          height={"100%"}
        />
      </div>

      <div className="pt-5 space-y-2">
        <h2 className="font-semibold text-gray-800">{snippet?.title}</h2>
        <div className="flex items-center justify-between">
          <h3 className="font-bold">{snippet?.channelTitle}</h3>
          <p className="flex gap-x-2 items-center">
            <ThumbsUp className="h-5 w-5" />
            <span className="font-semibold">
              {parseInt(statistics.likeCount).toLocaleString("en-US")}
            </span>
          </p>
        </div>
        <p className="flex gap-x-2 items-center">
          <span className="font-semibold">
            {parseInt(statistics?.viewCount).toLocaleString("en-US")}
          </span>
          <span>Views</span>
        </p>
        <p>{snippet.description}</p>
        <p className="flex gap-x-2 items-center">
          <span className="font-semibold">
            {parseInt(statistics?.commentCount).toLocaleString("en-US")}
          </span>
          <span>Comments</span>
        </p>
      </div>

      <div>
        <button className="hover:underline">See Comments</button>
      </div>
    </div>
  );
}

export default VideoPlayer;
