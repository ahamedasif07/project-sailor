import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "./MainLayOut";
import Home from "./Pages/Home";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut />,
    errorElement: <h2>This page not found</h2>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);
