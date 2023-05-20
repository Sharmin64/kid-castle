import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home/Home";
import Blog from "../Pages/Blog/Blog";
import ErrorPage from "../Pages/Error/ErrorPage";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AddToys from "../Pages/AddToys/AddToys";
import Dolls from "../Pages/Dolls/Dolls";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "/addtoys/:id",
        element: (
          <PrivateRoute>
            <AddToys />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5005/toys/${params.id}`),
      },
      {
        path: "dolls",
        element: (
          <PrivateRoute>
            <Dolls></Dolls>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
