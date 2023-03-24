function VideoDetailsSkeleton() {
  return (
    <div className="space-y-5 animate-pulse">
      <div className="h-[300px] bg-gray-100 rounded-xl "></div>

      <div className="flex justify-between items-center">
        {/* channel option */}
        <div className="flex gap-x-5 items-center">
          <div className="w-12 h-12 rounded-full bg-gray-100"></div>
          <div className="space-y-3">
            <div className="h-3 w-[100px] bg-gray-100 rounded-xl"></div>
            <div className="h-3 w-[150px] bg-gray-100 rounded-xl"></div>
          </div>
        </div>

        {/* likes and comment */}
        <div className="flex gap-5">
          <div className="h-2 w-[100px] bg-gray-200 rounded-xl"></div>
          <div className="h-2 w-[100px] bg-gray-200 rounded-xl"></div>
        </div>
      </div>

      <div className="space-y-2">
        <div className="h-2 w-[25%] bg-gray-100 rounded-xl"></div>
        <div className="h-2 w-[50%] bg-gray-100 rounded-xl"></div>
        <div className="h-2 w-[25%] bg-gray-100 rounded-xl"></div>
        <div className="h-2 w-[75%] bg-gray-100 rounded-xl"></div>
      </div>
    </div>
  );
}

export default VideoDetailsSkeleton;
