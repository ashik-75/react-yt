import React from "react";
import Sidebar from "../Sidebar";
import Topbar from "../Topbar";

function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <Topbar />

      <div className="grid grid-cols-12 max-w-7xl mx-auto ">
        <div className="col-span-2 border-r p-5 h-[calc(100vh-104px)] overflow-y-scroll scrollbar-hide">
          <Sidebar />
        </div>
        <div className="col-span-10 p-5  h-[calc(100vh-104px)] overflow-y-scroll scrollbar-hide">
          {children}
        </div>
      </div>
    </main>
  );
}

export default MainLayout;
