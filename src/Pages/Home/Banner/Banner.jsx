import React from "react";
import "../Banner/Banner.css";

const Banner = () => {
  return (
    <div className="hero min-h-screen ">
      <div className="my-banner hero-overlay bg-opacity-60">
        <div className="absolute top-96 items-center justify-center mx-auto">
          <h2 className="text-4xl font-extrabold text-blue-800 text-center">
            Disney Princess
          </h2>
          <p className="text-blue-700 text-center w-1/3 mx-auto">
            Our disney princess is dolor sit amet consectetur adipisicing elit.
            Repellat eos quidem voluptas molestias, expedita quis reiciendis
            optio error consequatur eligendi voluptatem, quam fugiat voluptates
            facere vel explicabo eius? Pariatur, laborum?
          </p>
          <button className="bg-indigo-400 border-spacing-4 text-zinc-900 px-8 py-4 rounded mt-5">
            Explore More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
