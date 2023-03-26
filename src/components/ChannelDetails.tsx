import { formatViews } from "../utils/formatter";

function ChannelDetails({ data }: any) {
  console.log("Channel Data: ", data);
  return (
    <div className="space-y-10">
      <div className="h-[250px] w-full">
        <img
          src={data?.brandingSettings?.image?.bannerExternalUrl || "/city.jpg"}
          className=" h-full w-full object-cover object-center"
          alt=""
        />
      </div>

      <div className="flex gap-5 max-w-5xl mx-auto">
        <div className="w-20 h-20 shrink-0 overflow-hidden rounded-full">
          <img
            src={data?.snippet?.thumbnails?.high?.url}
            alt=""
            className="h-full w-full object-cover object-center"
          />
        </div>

        <div className="space-y-1">
          <h1 className="text-xl font-medium">{data?.snippet?.title}</h1>
          <div className="flex space-x-4">
            <p className="font-medium">{data?.snippet?.customUrl}</p>
            <div className="space-x-1">
              <span className="font-bold">
                {formatViews(data?.statistics?.subscriberCount)}
              </span>
              <span>Subscribers</span>
            </div>
            <div className="space-x-2">
              <span className="font-bold">
                {formatViews(data?.statistics?.videoCount)}
              </span>
              <span>Videos</span>
            </div>
          </div>
          <p>{data?.snippet?.description}</p>
        </div>
      </div>
    </div>
  );
}

export default ChannelDetails;
