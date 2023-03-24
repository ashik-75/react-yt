import { useQuery } from "@tanstack/react-query";
import { ThumbsUp } from "lucide-react";
import { useState } from "react";
import ReactPlayer from "react-player";
import { getData } from "../services";
import { VideoDetailsType } from "../types/video.types";
import Comments from "./Comments";

function Loader() {
  return (
    <svg
      className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-500"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        stroke-width="4"
      ></circle>
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </svg>
  );
}

function VideoPlayer({ video }: { video: VideoDetailsType }) {
  const { id, snippet, statistics } = video || {};
  const [isStart, setIsStart] = useState(false);

  const { data, isLoading, isError, isPaused, isInitialLoading } = useQuery({
    queryKey: ["comment", id],
    queryFn: () => getData(`/commentThreads?videoId=${id}`),
    enabled: isStart,
  });

  console.log("Comment: ", {
    data,
    isLoading,
    isError,
    isPaused,
    isInitialLoading,
  });

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

      <div className="space-y-5">
        <button
          onClick={() => setIsStart(true)}
          className="hover:underline flex gap-3 items-center"
        >
          See Comments {isInitialLoading && <Loader />}
        </button>

        <Comments comments={data?.items} />
      </div>
    </div>
  );
}

export default VideoPlayer;
