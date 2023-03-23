import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./components/layout/RootLayout";
import Homepage from "./pages/Homepage";
import VideoDetails from "./pages/VideoDetails";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Homepage />} />
        <Route path="/watch" element={<VideoDetails />} />
        <Route path="/related" element={<VideoDetails />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
