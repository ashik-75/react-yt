function VideoSkl() {
  return (
    <div className="space-y-2 animate-pulse">
      <div className="bg-gray-100 h-32 rounded-xl"></div>
      <p className="h-3 bg-gray-100 rounded-xl"></p>
      <p className="h-3 bg-gray-100 rounded-xl"></p>
      <p className="h-4 bg-gray-100 rounded-xl w-[50%]"></p>
    </div>
  );
}

function VideoListSkeleton({ item }: { item: number }) {
  return (
    <div className={`grid grid-cols-1 sm:grid-cols-${item} gap-5`}>
      {[...Array(10).keys()].map((v) => (
        <VideoSkl key={v} />
      ))}
    </div>
  );
}

export default VideoListSkeleton;
