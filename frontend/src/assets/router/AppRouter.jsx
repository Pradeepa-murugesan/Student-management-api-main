import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../../App";
import Home from "../../pages/home";
import Students from "../../pages/Students";
import AddStudent from "../../pages/AddStudent";
import EditStudent from "../../pages/EditStudent";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> }, // 👈 Default route for "/"
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
