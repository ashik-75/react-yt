import { Link } from "react-router-dom";
import TimeAgo from "react-timeago";
import { VideoType } from "../types/video.types";

function CheckedIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-5 h-5 text-gray-700"
    >
      <path
        fillRule="evenodd"
        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function VideoCard({
  id: { videoId },
  snippet: {
    channelId,
    channelTitle,
    description,
    title,
    publishedAt,
    thumbnails: {
      high: { url },
    },
  },
}: VideoType) {
  return (
    <div>
      <Link to={`/watch?v=${videoId}`}>
        <div className="rounded-xl overflow-hidden max-h-[270px]">
          <img
            src={url}
            alt=""
            className="object-cover object-center h-full w-full"
          />
        </div>
      </Link>

      <div className="pt-3">
        <h1 className="font-medium">{title.slice(0, 60)}</h1>
        <Link to={`/channel/${channelId}`}>
          <p className="flex gap-2 items-center hover:underline">
            <span className="font-bold">{channelTitle}</span>
            <CheckedIcon />
          </p>
        </Link>
        <p>
          <TimeAgo date={publishedAt} />
        </p>
      </div>
    </div>
  );
}

export default VideoCard;
