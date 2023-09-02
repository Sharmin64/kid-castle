import React from "react";
//import "../Banner/Banner.css";
import {Carousel} from "react-responsive-carousel";
import banner from "../../../assets/banner/bannerDoll.jpg";
import bannerA from "../../../assets/banner/bannerD.jpg";
import ban from "../../../assets/banner/bannerE.jpg";
import banR from "../../../assets/banner/bannerO.jpg";

const Banner = () => {
  return (
    <div className="hero lg:h-auto min-h-screen min-w-screen mt-0">
      <Carousel showArrows={true}>
        <div>
          <img className="w-[700px]" src={banner} />
        </div>
        <div>
          <img className="w-[700px]" src={bannerA} />
        </div>
        <div>
          <img className="w-[700px]" src={ban} />
        </div>
        <div>
          <img className="w-[700px]" src={banR} />
        </div>
        <div>
          <img className="w-[700px]" src={banner} />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
