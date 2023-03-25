import { XOctagon } from "lucide-react";
import { Link } from "react-router-dom";

function ErrorHandler() {
  return (
    <div className="mt-[200px]">
      <div className=" max-w-3xl mx-auto p-10 bg-rose-50 flex gap-5">
        <XOctagon className="h-5 w-5 mt-1 text-rose-500" />
        <div className="text-rose-500">
          <p>Something Wrong happend</p>
          <p>Please provide the currect info</p>
          <p className="text-green-900 underline underline-offset-2">
            <Link to={"/"}>Back to home</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ErrorHandler;
