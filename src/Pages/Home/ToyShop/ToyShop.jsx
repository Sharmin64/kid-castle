import React from "react";
import SectionTitle from "../../../hooks/SectionTitle";
//import fairyA from "../../../assets/images/fairy_5.jpeg";
import fairyB from "../../../assets/extra/burbyShop.jpg";

const ToyShop = () => {
  return (
    <>
      <SectionTitle heading={"Toy Shop"}></SectionTitle>
      <div className="relative mb-32 mt-5">
        {/* Background Image */}
        <img className="w-full object-cover" src={fairyB} alt="Background" />

        {/* Overlay */}
        <div className="absolute -bottom-16 left-36 sm:right-0 sm:left-0 bg-blend-overlay rounded-full  w-9/12 h-64 items-center justify-center  bg-pink-500 mx-auto origin-center translate-y-5 md:shrink-0 sm:w-full  tracking-wide">
          <h1 className="text-4xl font-bold text-gray-800 mt-6 text-center">
            Get 30% Off Buying Any Package
          </h1>

          <p className="text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl text-center text-black mt-6 sm:overflow-hidden md:shrink-0 sm:word-break">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus, libero accusamus laborum deserunt ratione dolor
            officiis praesentium! Deserunt magni aperiam dolor eius dolore at,
            nihil iusto ducimus incidunt quibusdam nemo.
          </p>
        </div>

        {/* Content */}
        <div className="absolute top-24 left-0 w-full h-full flex flex-col justify-center items-center text-gray-500"></div>
      </div>
    </>
  );
};

export default ToyShop;
