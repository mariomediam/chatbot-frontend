
import {
  createBrowserRouter,
} from "react-router-dom";
import ErrorPage from "./error-page";

import Root from "./root";
import { Login } from "../views/Login";
import { Inicio } from "../components/Inicio";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Inicio />,
    errorElement: <ErrorPage />,
  },
  {
    path: "login",
    element: <Login />,
  },
]);

export default router;