import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./container/root";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.scss";

import Home from "./container/home";
import Qualification from "./container/qualification";
import Terms from "./container/terms";
import Online from "./container/online";
import Presential from "./container/presential";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
      path: "/",
      element:  <Home />
      },
      {
        path: "inicio",
        element: <Home />
      },
      {
        path: "qualificacoes",
        element: <Qualification />
      },
      {
        path: "atendimento_online",
        element: <Online />
      },
      {
        path: "atendimento_presencial",
        element: <Presential />
      },
      {
        path: "politica_de_privacidade",
        element: <Terms />
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
