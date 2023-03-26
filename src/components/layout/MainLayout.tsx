import React from "react";
import Sidebar from "../Sidebar";

function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-12 ">
      <Sidebar />

      <div className="sm:col-span-10  p-5 mt-[139px] sm:mt-[83px]">
        {children}
      </div>
    </div>
  );
}

export default MainLayout;
