import Detailed from "../components/Detailed";
import MiddleBar from "../components/MiddleBar";
import MobileDirectory from "../components/MobileDirectory";
import MobileMenu from "../components/MobileMenu";
import Sidebar from "../components/Sidebar";

function Homepage() {
  return (
    <div className="p-5">
      <div className="max-w-7xl mx-auto rounded-lg overflow-hidden">
        {/* Mobile menu */}
        <div className="flex justify-between p-3 border rounded-t-lg sm:hidden">
          <img src="/xing.png" className="h-10 w-10" alt="" />

          <MobileMenu />
        </div>
        <div className="p-3 border-x sm:hidden">
          <MobileDirectory />
        </div>

        {/* end mobile menu */}
        <div className="grid-col-1 md:grid-cols-2 grid min-h-[95vh]">
          <div className="grid grid-cols-9">
            <div className="bg-zinc-100 col-span-4 hidden md:block">
              <Sidebar />
            </div>
            <div className="bg-gray-50 col-span-5 hidden md:block">
              <MiddleBar />
            </div>
          </div>
          <div className="c bg-gray-100">
            <Detailed />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
