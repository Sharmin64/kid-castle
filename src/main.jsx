import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {RouterProvider} from "react-router-dom";
import router from "./Routes/Router";
import AuthProvider from "./Providers/AuthProvider.jsx";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <div className="min-h-screen min-w-screen mx-auto">
        <RouterProvider router={router} />
      </div>
    </AuthProvider>
  </React.StrictMode>
);
