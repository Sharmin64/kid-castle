import React from "react";
import "../Banner/Banner.css";
import {Carousel} from "react-responsive-carousel";
import banner from "../../../assets/banner/bannerDoll.jpg";

const Banner = () => {
  return (
    <div className="hero lg:h-auto min-h-screen min-w-screen">
      <Carousel
        showArrows={true}
        //onChange={onChange}
        //onClickItem={onClickItem}
        //onClickThumb={onClickThumb}
      >
        <div>
          <img className="w-[700px]" src={banner} />
        </div>
        <div>
          <img className="w-[700px]" src={banner} />
        </div>
        <div>
          <img className="w-[700px]" src={banner} />
        </div>
        <div>
          <img className="w-[700px]" src={banner} />
        </div>
        <div>
          <img className="w-[700px]" src={banner} />
        </div>
        <div>
          <img className="w-[700px]" src={banner} />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
