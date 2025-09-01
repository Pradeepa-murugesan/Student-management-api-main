import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../../App";
import Home from "../../pages/Home";
import Students from "../../pages/Students";
import AddStudent from "../../pages/AddStudent";
import EditStudent from "../../pages/EditStudent";
import React from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // App contains Outlet and shared state
    children: [
      { index: true, element: <Home /> }, // default route
      { path: "home", element: <Home /> },
      { path: "students", element: <Students /> },
      { path: "add-student", element: <AddStudent /> },
      { path: "edit-student/:id", element: <EditStudent /> },
    ],
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
