import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../pages/Root";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import AllApplication from "../pages/AllApplication";
import InstalledApps from "../pages/InstalledApps";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage> </ErrorPage>,
    children: [
      {
        index: true,
        loader: () => fetch("appsData.json"),
        element: <Home></Home>,
      },
      {
        path: "/apps",
        loader: () => fetch("allAppData.json"),
        element: <AllApplication></AllApplication>,
      },
      {
        path: "/installation",
        element: <InstalledApps></InstalledApps>,
      },
    ],
  },
]);
