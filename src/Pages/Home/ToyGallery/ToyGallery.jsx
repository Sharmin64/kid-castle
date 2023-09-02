import React from "react";
import Marquee from "react-fast-marquee";

import fairy_1 from "../../../assets/extra/dollA.jpeg";
import fairy_2 from "../../../assets/extra/bervieWhite.jpeg";
import fairy_3 from "../../../assets/extra/berStyle.jpeg";
import fairy_5 from "../../../assets/extra/berbieSad.jpeg";
import fairy_6 from "../../../assets/extra/berbieCute.jpeg";
import fairy_7 from "../../../assets/extra/berbieBlack.jpeg";
import fairy4 from "../../../assets/extra/berbeHat.jpeg";
import doll_4 from "../../../assets/extra/berbeP.jpeg";
import SectionTitle from "../../../hooks/SectionTitle";

const ToyGallery = () => {
  return (
    <>
      <SectionTitle heading={"Berbie Exibition"}></SectionTitle>
      <Marquee className="w-fit">
        <div className="w-fit gap-4 my-6 flex flex-row items-center overflow-hidden rounded ">
          <div className="card bg-indigo-400 rounded w-fit">
            <img className="w-fit " src={fairy_1} alt="" />
          </div>
          <div className="card w-fit bg-indigo-400 rounded">
            <img className="w-cover rounded-3xl " src={fairy4} alt="" />
          </div>
          <div className="card w-fit bg-indigo-400 rounded">
            <img className="w-full rounded-3xl " src={fairy_2} alt="" />
          </div>
          <div className="card w-fit bg-indigo-400 rounded">
            <img className="w-full rounded-3xl " src={fairy_3} alt="" />
          </div>
          <div className="card w-fit bg-indigo-400 rounded">
            <img className="w-full rounded-3xl " src={fairy_5} alt="" />
          </div>
          <div className="card w-fit bg-indigo-400 rounded">
            <img className="w-fit  rounded-3xl" src={fairy_6} alt="" />
          </div>
          <div className="card w-fit bg-indigo-400 rounded">
            <img className="w-fit  rounded-3xl" src={fairy_7} alt="" />
          </div>
          <div className="card w-fit bg-indigo-400 rounded">
            <img className="w-fit  rounded-3xl" src={doll_4} alt="" />
          </div>
        </div>
      </Marquee>
    </>
  );
};

export default ToyGallery;
