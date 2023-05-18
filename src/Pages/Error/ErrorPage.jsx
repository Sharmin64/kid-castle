import React from "react";
import { Link } from "react-router-dom";
import err from "../../assets/err.jpg";

const ErrorPage = () => {
  return (
    <section className="flex items-center h-screen p-16 bg-gray-100 text-gray-900">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <img className="max-w-fit" src={err} alt="error" />
        <Link
          to="/"
          className="px-8 py-3 font-semibold rounded bg-cyan-200 text-gray-900"
        >
          Back to homepage
        </Link>
        <div className="max-w-md text-center"></div>
      </div>
    </section>
  );
};

export default ErrorPage;
