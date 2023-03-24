function ChannelSkeleton() {
  return (
    <div className="space-y-3 animate-pulse">
      <div className="bg-gray-100 h-[200px] rounded-xl"></div>
      <div className="flex gap-5 items-center">
        <div className="w-16 shrink-0 h-16 bg-gray-100 rounded-full"></div>
        <div className="space-y-2 flex-1">
          <p className="h-3 bg-gray-100 rounded-xl w-[25%]"></p>
          <p className="h-3 bg-gray-100 rounded-xl w-[35%]"></p>
          <p className="h-3 bg-gray-100 rounded-xl w-[50%]"></p>
        </div>
      </div>
    </div>
  );
}

export default ChannelSkeleton;
