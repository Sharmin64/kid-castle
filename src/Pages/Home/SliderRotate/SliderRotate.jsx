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
import SectionTitle from "../../../hooks/SectionTitle";

const SliderRotate = () => {
  AOS.init();
  return (
    <>
      <SectionTitle heading={"Our Dolls Collection"}></SectionTitle>
      <div
        data-aos="fade-right"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-center"
        className=" grid lg:grid-cols-3 grid-cols-1 md:w-full gap-4 justify-center items-center"
      >
        <div className="card md:w-full bg-base-100 shadow-xl">
          <figure>
            <img className="rounded-full" src={img7} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Berbie Princess</h2>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card md:w-full bg-base-100 shadow-xl">
          <figure>
            <img className="rounded-full" src={img6} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Berbie Princess</h2>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card md:w-full bg-base-100 shadow-xl">
          <figure>
            <img className="rounded-full" src={img5} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Berbie Princess</h2>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card md:w-full bg-base-100 shadow-xl">
          <figure>
            <img className="rounded-full" src={img2} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Berbie Princess</h2>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card md:w-full bg-base-100 shadow-xl">
          <figure>
            <img className="rounded-full" src={extra9} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Berbie Princess</h2>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card md:w-full bg-base-100 shadow-xl">
          <figure>
            <img className="rounded-full" src={extra3} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Berbie Princess</h2>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card md:w-full bg-base-100 shadow-xl">
          <figure>
            <img className="rounded-full" src={extra8} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Berbie Princess</h2>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SliderRotate;
