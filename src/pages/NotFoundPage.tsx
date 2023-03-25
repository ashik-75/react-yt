import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div className="mt-[200px]">
      <div className="max-w-3xl bg-gray-50 mx-auto space-y-3 p-10">
        <p className="text-purple-600 font-bold">404</p>
        <h1 className="font-bold text-4xl">Page Not Found</h1>
        <p>Sorry, we couldn't find the page you're looking for</p>
        <div>
          <Link
            to={"/"}
            className="flex gap-x-3 items-center text-purple-600 hover:underline"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back to Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFoundPage;
