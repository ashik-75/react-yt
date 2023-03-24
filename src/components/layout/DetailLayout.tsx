import React from "react";
import Topbar from "../Topbar";

function DetailLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Topbar />
      {children}
    </div>
  );
}

export default DetailLayout;
