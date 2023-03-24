import { ThumbsUp } from "lucide-react";
import ReactTimeago from "react-timeago";

function Comments({ comments }: any) {
  return (
    <div className="space-y-4">
      {comments?.map((comment: any) => {
        const {
          authorProfileImageUrl,
          authorDisplayName,
          textDisplay,
          likeCount,
          publishedAt,
        } = comment?.snippet?.topLevelComment?.snippet;

        return (
          <div className="  flex gap-5 overflow-hidden">
            <div className="h-10 w-10 shrink-0 rounded-full overflow-hidden">
              <img
                src={authorProfileImageUrl}
                alt=""
                className="h-full w-full object-cover object-center"
              />
            </div>

            <div className="space-y-1">
              <h1 className=" flex gap-x-3 items-center">
                <span className="font-semibold">{authorDisplayName}</span>
                <span className="text-sm">
                  <ReactTimeago date={publishedAt} />
                </span>
              </h1>
              <p>{textDisplay}</p>
              <p className="flex gap-3">
                <span>{likeCount}</span>
                <ThumbsUp className="h-5 w-5 " />
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Comments;
