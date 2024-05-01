import React from "react";
import "./SliderRotate.css";
//import AOS from "aos";
//import "aos/dist/aos.css";
import img7 from "../../../assets/images/Cinderella_480x480.webp";
import img6 from "../../../assets/extra/bervieWhite.jpeg";
import img5 from "../../../assets/extra/couple.jpeg";
import img2 from "../../../assets/extra/berStyle.jpeg";
import extra8 from "../../../assets/extra/berbieCute.jpeg";
//import extra9 from "../../../assets/extra/berbieBlack.jpeg";
import extra3 from "../../../assets/images/doll_3.jpeg";
import SectionTitle from "../../../hooks/SectionTitle";

const SliderRotate = () => {
  //AOS.init();
  return (
    <>
      <SectionTitle heading={"Our Dolls Collection"}></SectionTitle>
      <div
        //data-aos="zoom-in"
        //data-aos-offset="200"
        //data-aos-delay="50"
        //data-aos-duration="1000"
        //data-aos-easing="ease-in-out"
        //data-aos-mirror="true"
        //data-aos-once="false"
        //data-aos-anchor-placement="top-center"
        className=" grid lg:grid-cols-3 grid-cols-1 md:w-full gap-4 justify-center items-center mb-10 h-screen"
      >
        <div className="card relative w-[300px] h-[200px] rounded-xl shadow-xl py-8 px-10 bg-[#fff] pointer mr-8 hover:h-[420px] content-[''] translate-y-14 opacity-0 transition ease-in-out delay-150">
          <div className="imgbox relative w-100 h-100 -translate-y-14 z-20">
            <img src={img7} alt="" />
          </div>
          <div className="content">
            <h3 className="text-pink-800">Berbie doll</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Obcaecati, optio.
            </p>
          </div>
        </div>
        <div className="card-box">
          <div className="imgbox">
            <img src={img6} alt="" />
          </div>
          <div className="content">
            <h3 className="text-pink-800">Berbie doll</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Obcaecati, optio.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="imgbox">
            <img src={img2} alt="" />
          </div>
          <div className="content">
            <h3 className="text-pink-800">Berbie doll</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Obcaecati, optio.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="imgbox">
            <img src={img5} alt="" />
          </div>
          <div className="content">
            <h3 className="text-pink-800">Berbie doll</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Obcaecati, optio.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="imgbox">
            <img src={extra3} alt="" />
          </div>
          <div className="content">
            <h3 className="text-pink-800">Berbie doll</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Obcaecati, optio.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="imgbox">
            <img src={extra8} alt="" />
          </div>
          <div className="content">
            <h3 className="text-pink-800">Berbie doll</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Obcaecati, optio.
            </p>
          </div>
        </div>

        {/*<div className="card md:w-full bg-base-100 shadow-xl">
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
        </div>*/}
      </div>
    </>
  );
};

export default SliderRotate;
