import { Outlet } from "react-router-dom";
import Topbar from "../Topbar";

function RootLayout() {
  return (
    <div>
      <Topbar />
      <Outlet />
    </div>
  );
}

export default RootLayout;
