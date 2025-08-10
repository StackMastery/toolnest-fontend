import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <h1>Hello</h1>,
      },
    ],
  },
  {
    path: "*",
    element: "Not found",
  },
]);
