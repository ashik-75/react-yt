import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

function Topbar() {
  return (
    <div className=" border-b p-5  fixed w-full top-0 bg-white z-50">
      <div className="sm:px-5 items-center justify-between flex">
        <div>
          <Link to={"/"}>
            <img src="/youtube.png" className="h-10 w-10" alt="" />
          </Link>
        </div>
        <div className="sm:w-[50%]">
          <SearchBar />
        </div>
      </div>
    </div>
  );
}

export default Topbar;
