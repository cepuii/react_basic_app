import { createBrowserRouter } from "react-router-dom";
import Main from "./layout/Main";
import Auth from "./layout/Auth";
import Home from "./pages/Home";
import Shows from "./pages/Shows";
import NotFound from "./pages/NotFound";
import ShowDetails from "./pages/ShowDetails";
import ActorDetails from "./pages/ActorDetails";
import LoginSignUp from "./pages/Auth/LoginSignUp";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import AboutUs from "./pages/AboutUs";

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
        path: "/aboutus",
        element: <AboutUs />,
      },
      {
        path: "/shows",
        element: (
          <PrivateRoute>
            <Shows />
          </PrivateRoute>
        ),
      },
      {
        path: "/shows/:id",
        element: (
          <PrivateRoute>
            <ShowDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/shows/actor/:id",
        element: (
          <PrivateRoute>
            <ActorDetails />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "auth/",
    element: <Auth />,
    errorElement: <NotFound />,
    children: [
      {
        path: "login",
        element: <LoginSignUp />,
      },
    ],
  },
]);

export default router;
