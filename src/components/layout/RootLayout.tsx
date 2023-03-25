import { Outlet } from "react-router-dom";
import Topbar from "../Topbar";

function RootLayout() {
  return (
    <main>
      <Topbar />
      <Outlet />
    </main>
  );
}

export default RootLayout;
