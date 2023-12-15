import { createBrowserRouter } from "react-router-dom";
import Main from "./layout/Main";
import Home from "./pages/Home";
import Shows from "./pages/Shows";
import NotFound from "./pages/NotFound";
import ShowDetails from "./pages/ShowDetails";
import ActorDetails from "./pages/ActorDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/shows",
        element: <Shows />,
      },
      {
        path: "/shows/:id",
        element: <ShowDetails />,
      },
      {
        path: "/shows/actor/:id",
        element: <ActorDetails />,
      },
    ],
  },
]);

export default router;
