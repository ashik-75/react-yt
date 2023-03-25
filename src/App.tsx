import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import ErrorHandler from "./components/ErrorHandler";
import DetailLayout from "./components/layout/DetailLayout";
import MainLayout from "./components/layout/MainLayout";
import RootLayout from "./components/layout/RootLayout";
import ChannelPage from "./pages/ChannelPage";
import Homepage from "./pages/Homepage";
import NotFoundPage from "./pages/NotFoundPage";
import VideoDetails from "./pages/VideoDetails";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
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
          errorElement={<ErrorHandler />}
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

        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
