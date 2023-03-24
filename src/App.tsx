import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import DetailLayout from "./components/layout/DetailLayout";
import MainLayout from "./components/layout/MainLayout";
import ChannelPage from "./pages/ChannelPage";
import Homepage from "./pages/Homepage";
import VideoDetails from "./pages/VideoDetails";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route
          index
          element={
            <MainLayout>
              <Homepage />
            </MainLayout>
          }
        />
        <Route
          path="/watch"
          element={
            <DetailLayout>
              <VideoDetails />
            </DetailLayout>
          }
        />
        <Route
          path="/channel/:channelId"
          element={
            <MainLayout>
              <ChannelPage />
            </MainLayout>
          }
        />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
