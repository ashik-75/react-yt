import { Filter, Search } from "lucide-react";
import Users from "./Users";

function MiddleBar() {
  return (
    <div className="border-x">
      <div className="space-y-2 p-5 border-b">
        <div>
          <h2 className="font-medium text-gray-700 text-lg">Directory</h2>
          <p className="text-gray-600 font-medium text-sm">
            Search directory of 2088 employees
          </p>
        </div>

        <div className="overflow-hidden flex gap-x-2 relative">
          <input
            type="search"
            placeholder="Search"
            className="outline-none focus:border-gray-400 border-gray-300 shadow w-full border rounded px-4 pl-8 py-1 placeholder:text-sm"
          />
          <Search className="h-4 w-4 text-gray-500 absolute top-2 left-2" />

          <button className="border px-2 py-0.5 rounded border-gray-300 hover:border-gray-400 shadow">
            <Filter className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>

      <Users />
    </div>
  );
}

export default MiddleBar;
