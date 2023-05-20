import React from "react";
import Marquee from "react-fast-marquee";

import fairy_1 from "../../../assets/images/fairy_1.jpeg";
import fairy_2 from "../../../assets/images/fairy_2.jpeg";
import fairy_3 from "../../../assets/images/fairy_3.jpeg";
import fairy_5 from "../../../assets/images/fairy_5.jpeg";
import fairy_6 from "../../../assets/images/fairy_6.jpeg";
import fairy_7 from "../../../assets/images/fairy_7.jpeg";
import fairy4 from "../../../assets/images/fairy4.jpeg";
import doll_4 from "../../../assets/images/doll_4.jpeg";

const ToyGallery = () => {
  return (
    <Marquee>
      <div className="w-fit gap-4 my-6 flex flex-row items-center overflow-hidden rounded ">
        <img className="w-full ring-offset-8" src={fairy_1} alt="" />
        <img className="w-full ring-offset-8" src={fairy4} alt="" />
        <img className="w-full ring-offset-8" src={fairy_2} alt="" />
        <img className="w-full ring-offset-8" src={fairy_3} alt="" />
        <img className="w-full ring-offset-8" src={fairy_5} alt="" />
        <img className="w-full ring-offset-8" src={fairy_6} alt="" />
        <img className="w-full ring-offset-8" src={fairy_7} alt="" />
        <img className="w-full ring-offset-8" src={doll_4} alt="" />
      </div>
    </Marquee>
  );
};

export default ToyGallery;
