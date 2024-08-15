
import {
  createBrowserRouter,
} from "react-router-dom";
import ErrorPage from "./error-page";

import Root from "./root";
import { Login } from "../views/Login";
import { Inicio } from "../components/Inicio";
import { Init } from "../views/Init";
import { PrivateRoutes } from "../routes/PrivateRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PrivateRoutes />,
    children: [
      {
        path: "main",
        element: <Init />,
      },
    ],
  },
  {
    path: "chat",
    element: <Inicio />,
    errorElement: <ErrorPage />,
  },
  {
    path: "login",
    element: <Login />,
  }
]);

export default router;