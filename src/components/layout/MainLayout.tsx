import React from "react";
import Sidebar from "../Sidebar";

function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-12 h-[100vh] ">
      <div className="sm:col-span-2 border-r">
        <Sidebar />
      </div>
      <div className="sm:col-span-10  p-5 mt-[83px] overflow-y-scroll scrollbar-hide">
        {children}
      </div>
    </div>
  );
}

export default MainLayout;
