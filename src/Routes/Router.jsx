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
        element: <AddToys />,
      },

      {
        path: "/alltoys",
        element: <AllToys />,
      },
      {
        path: "/singleToyDetail/:id",
        element: <SingleToyDetail />,
        loader: ({ params }) =>
          fetch(`http://localhost:5005/dolls/${params.id}`),
      },
      {
        path: "mytoys",
        element: <MyToys />,
      },
    ],
  },
]);

export default router;
