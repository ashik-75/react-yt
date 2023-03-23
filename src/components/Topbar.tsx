import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

function Topbar() {
  return (
    <div className=" border-b p-5  sticky top-0 bg-white z-50">
      <div className="max-w-7xl mx-auto items-center justify-between flex">
        <div>
          <Link to={"/"}>
            <img src="/youtube.png" className="h-10 w-10" alt="" />
          </Link>
        </div>
        <div className="w-[50%]">
          <SearchBar />
        </div>
      </div>
    </div>
  );
}

export default Topbar;
