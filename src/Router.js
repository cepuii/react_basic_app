import { createBrowserRouter } from "react-router-dom";
import Main from "./layout/Main";
import Home from "./pages/Home";
import Films from "./pages/Films";
import NotFound from "./pages/NotFound";
import FilmDetails from "./pages/FilmDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/home",
        element: <Home />
      },
      {
        path: "/films",
        element: <Films />
      },
      {
        path: "/films/:filmId",
        element: <FilmDetails/>
      }
    ]
  }
])

export default router;