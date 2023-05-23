import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home/Home";
import Blog from "../Pages/Blog/Blog";
import ErrorPage from "../Pages/Error/ErrorPage";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AddToys from "../Pages/AddToys/AddToys";

import AllToys from "../Pages/AllToys/AllToys";

import SingleToyDetail from "../Pages/SingleToyDetail/SingleToyDetail";
import MyToys from "../Pages/MyToys/MyToys";
import UpdateToy from "../Pages/UpdateToy/UpdateToy";
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
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/addtoys",
        element: (
          <PrivateRoute>
            <AddToys />
          </PrivateRoute>
        ),
      },

      {
        path: "/alltoys",
        element: <AllToys />,
      },
      {
        path: "/singleToyDetail/:id",
        element: (
          <PrivateRoute>
            <SingleToyDetail />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://assignment-11-toy-server-tau.vercel.app/dolls/${params.id}`
          ),
      },
      {
        path: "mytoys",
        element: <MyToys />,
      },
      {
        path: "/updateToy/:id",
        element: <UpdateToy />,
        loader: ({ params }) =>
          fetch(
            `https://assignment-11-toy-server-tau.vercel.app/dolls/${params.id}`
          ),
      },
    ],
  },
]);

export default router;
