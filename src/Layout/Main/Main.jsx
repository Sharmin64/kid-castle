import React from "react";
import Navbar from "../../Shared/Navbar/Navbar";
import {Outlet} from "react-router-dom";
import Footer from "../../Shared/Footer/Footer";

const Main = () => {
  return (
    <div>
      <div className="w-full">
        <Navbar />
      </div>
      <Outlet />
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
};

export default Main;
