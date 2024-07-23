import React from "react";
import ReactDOM from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";

import "./index.scss";

import Home from "./pages/home/Home.tsx";
import HomeLayout from "./layouts/HomeLayout.tsx";
import Medicamento from "./pages/medicamentos/Medicamento.tsx";
import { medicamentosLoader } from "./loaders/medicamentosLoader.tsx";
import { default as GlobalError } from "./Error.tsx";

const router = createHashRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <GlobalError />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: medicamentosLoader,
      },
      {
        path: "/medicamentos/:slug",
        element: <Medicamento />,
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
