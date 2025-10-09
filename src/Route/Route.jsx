import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../pages/Root";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import AllApplication from "../pages/AllApplication";
import InstalledApps from "../pages/InstalledApps";
import AppDetails from "../pages/AppDetails";
import AppError from "../pages/AppError";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage> </ErrorPage>,
    children: [
      {
        index: true,
        loader: () => fetch("/appsData.json"),
        element: <Home></Home>,
      },
      {
        path: "/apps",
        loader: () => fetch("/allAppData.json"),
        element: <AllApplication></AllApplication>,
      },
      {
        path: "/installation",
        element: <InstalledApps></InstalledApps>,
      },
      {
        path: "/appDetails/:id",
        loader: () => fetch("/allAppData.json"),
        element: <AppDetails></AppDetails>,
      },
      {
        path: "/appError",
        element: <AppError></AppError>,
      },
    ],
  },
]);
