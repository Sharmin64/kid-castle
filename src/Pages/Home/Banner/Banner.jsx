import React from "react";
import "../Banner/Banner.css";

const Banner = () => {
  return (
    <div className="hero lg:h-auto min-h-screen min-w-screen">
      <div className="my-banner hero-overlay bg-opacity-60">
        <div className="absolute top-72 bottom-0 items-center justify-center mx-auto">
          <h2 className="text-4xl font-extrabold text-blue-800 text-center sm:h-auto">
            Disney Princess
          </h2>
          <p className="text-blue-700 text-center mx-auto flex-shrink-0">
            Our disney princess is dolor sit amet consectetur adipisicing elit.
            Repellat eos quidem voluptas molestias, expedita quis reiciendis
            optio error consequatur eligendi voluptatem, quam fugiat voluptates
            facere vel explicabo eius? Pariatur, laborum?
          </p>
          <button className="bg-indigo-400 border-spacing-4 text-zinc-900 px-8 py-4 rounded ">
            Explore More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
