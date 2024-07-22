import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.scss";
import { createHashRouter, RouterProvider } from "react-router-dom";
import HomeLayout from "./layouts/HomeLayout.tsx";

const router = createHashRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <App />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLBodyElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
