import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../../App";

// Pages
import Home from "../../pages/Home";
import Students from "../../pages/Students";
import AddStudent from "../../pages/AddStudent";
import EditStudent from "../../pages/EditStudent";

import React from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // App contains Navbar + Sidebar + Outlet
    children: [
      { index: true, element: <Home /> }, // default route
      { path: "home", element: <Home /> },
      { path: "students", element: <Students /> },
      { path: "add-student", element: <AddStudent /> },
      { path: "edit-student/:id", element: <EditStudent /> },
    ],
  },
],
  {
    future: {
      v7_startTransition: true, // 👈 enables the new behavior early
    },
  });

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
