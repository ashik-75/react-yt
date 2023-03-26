import { Outlet } from "react-router-dom";
import MobileSidebar from "../Sidebar/MobileSidebar";
import Topbar from "../Topbar";

function RootLayout() {
  return (
    <main>
      <Topbar />
      <MobileSidebar />
      <Outlet />
    </main>
  );
}

export default RootLayout;
