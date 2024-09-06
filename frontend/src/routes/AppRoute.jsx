
import {
  createBrowserRouter,
} from "react-router-dom";
import ErrorPage from "./error-page";

import Root from "./root";
import { Login } from "../views/Login";
import { Inicio } from "../components/Inicio";
import { Init } from "../views/Init";
import { PrivateRoutes } from "../routes/PrivateRoutes";
import { ImportProcedure } from "../views/ImportProcedure";
import { AdminProcedure } from "../views/AdminProcedure";
import { ChatsSearch } from "../views/ChatsSearch";
import { Chat } from "../components/Chat";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PrivateRoutes />,
    children: [
      {
        path: "main",
        element: <Init />,
      },
      {
        path: "import",
        element: <ImportProcedure />,
      }
      ,
      {
        path: "admin-tupa",
        element: <AdminProcedure />,
      },
      {
        path: "chats",
        element: <ChatsSearch />,
      }
    ],
  },
  {
    path: "chat",
    element: <Chat />,
    errorElement: <ErrorPage />,
  },
  {
    path: "login",
    element: <Login />,
  }
]);

export default router;