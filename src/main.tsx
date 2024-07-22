import React from "react";
import ReactDOM from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";

import "./index.scss";

import App from "./App.tsx";
import HomeLayout from "./layouts/HomeLayout.tsx";
import { medicamentosLoader } from "./loaders/medicamentosLoader.tsx";

const router = createHashRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <App />,
        loader: medicamentosLoader,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLBodyElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
