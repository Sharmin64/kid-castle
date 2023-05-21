import React from "react";
import spon1 from "../../../assets/sponsor/spon1.png";
import spon2 from "../../../assets/sponsor/spon2.jpeg";
import spon3 from "../../../assets/sponsor/spon3.png";
import spon4 from "../../../assets/sponsor/spon4.png";
import spon5 from "../../../assets/sponsor/spon5.png";
import spon6 from "../../../assets/sponsor/spon6.png";

const ToySponsor = () => {
  return (
    <div>
      <h3 className="text-6xl mb-4 mt-3 font-bold ">Our Sponsor</h3>

      <div className=" gap-4 flex lg:flex-row flex-col items-center justify-around rounded mb-5">
        <img className="w-32 rounded " src={spon1} alt="" />
        <img className="w-32 rounded " src={spon2} alt="" />
        <img className="w-32 rounded " src={spon3} alt="" />
        <img className="w-32 rounded " src={spon4} alt="" />
        <img className="w-32 rounded " src={spon5} alt="" />
        <img className="w-32 rounded " src={spon6} alt="" />
      </div>
    </div>
  );
};

export default ToySponsor;
