import { createBrowserRouter } from "react-router-dom";
import Main from "./layout/Main";
import Auth from "./layout/Auth";
import Home from "./pages/Home";
import Shows from "./pages/Shows";
import NotFound from "./pages/NotFound";
import ShowDetails from "./pages/ShowDetails";
import ActorDetails from "./pages/ActorDetails";
import Register from "./pages/Auth/Register";
import LoginSignUp from "./pages/Auth/LoginSignUp";

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
  {
    path: "auth/",
    element: <Auth />,
    errorElement: <NotFound />,
    children: [
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "login",
        element: <LoginSignUp />,
      },
    ],
  },
]);

export default router;
