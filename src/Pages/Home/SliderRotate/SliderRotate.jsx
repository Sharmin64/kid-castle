import React from "react";
import "./SliderRotate.css";
import AOS from "aos";
import "aos/dist/aos.css";
import img7 from "../../../assets/extra/img7.jpeg";
import img6 from "../../../assets/extra/img6.jpeg";
import img5 from "../../../assets/extra/img5.jpeg";
import img2 from "../../../assets/extra/img2.jpeg";
import extra8 from "../../../assets/extra/extra8.jpeg";
import extra9 from "../../../assets/extra/extra9.jpeg";
import extra3 from "../../../assets/extra/extra3.jpeg";
const SliderRotate = () => {
  AOS.init({
    // Global settings:
    //disable: false,
    //startEvent: "DOMContentLoaded",
    //initClassName: "aos-init",
    //animatedClassName: "aos-animate",
    //useClassNames: false,
    //disableMutationObserver: false,
    //debounceDelay: 50,
    //throttleDelay: 99,
    //offset: 120,
    //delay: 0,
    //duration: 1000,
    //easing: "ease",
    ////once: false,
    //mirror: false,
    //anchorPlacement: "top-bottom",
  });

  return (
    <>
      <div
        data-aos="zoom-in"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-center"
        className=" grid lg:grid-cols-3 grid-cols-1 gap-4"
      >
        <div className="card w-fit glass">
          <img className="rounded w-cover" src={img7} alt="doll" />
        </div>
        <div className="card w-fit glass">
          <img className="rounded w-cover" src={extra3} alt="doll" />
        </div>
        <div className="card w-fit glass">
          <img className="rounded w-cover" src={img5} alt="doll" />
        </div>
        <div className="card w-fit glass">
          <img className="rounded w-cover" src={img2} alt="doll" />
        </div>
        <div className="card w-fit glass">
          <img className="rounded w-cover" src={extra8} alt="doll" />
        </div>
        <div className="card w-fit glass">
          <img className="rounded w-cover" src={extra9} alt="doll" />
        </div>
        <div className="card w-fit glass">
          <img className="rounded w-cover" src={img6} alt="doll" />
        </div>
      </div>
    </>
  );
};

export default SliderRotate;
