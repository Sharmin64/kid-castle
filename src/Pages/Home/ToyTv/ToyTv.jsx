import React from "react";
import SectionTitle from "../../../hooks/SectionTitle";
import tvA from "../../../assets/tvCard/abc.avif";
import tvB from "../../../assets/tvCard/NBC.avif";
import tvC from "../../../assets/tvCard/Mtv_1.webp";
import tvD from "../../../assets/tvCard/foxTv.avif";
import tvE from "../../../assets/tvCard/dTv.webp";
import tvF from "../../../assets/tvCard/Cnn.avif";
import tvG from "../../../assets/tvCard/CBC_logo_1.avif";

const ToyTv = () => {
  return (
    <div>
      <SectionTitle heading={"As Soon On Tv"}></SectionTitle>
      <div className="gap-4 flex lg:flex-row flex-col-1 items-center justify-around rounded mb-5 sm:justify-center">
        <img src={tvA} alt="" />
        <img src={tvE} alt="" />
        <img src={tvD} alt="" />
        <img src={tvG} alt="" />
        <img src={tvC} alt="" />
        <img src={tvB} alt="" />
        <img src={tvF} alt="" />
      </div>
    </div>
  );
};

export default ToyTv;
