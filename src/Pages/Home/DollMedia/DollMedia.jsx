import React from "react";
import {Gallery} from "react-grid-gallery";
import SectionTitle from "../../../hooks/SectionTitle";

const DollMedia = () => {
  const images = [
    {
      src: "https://i.ibb.co/bRPTPK3/images-3.jpg",
      width: 520,
      height: 320,
      caption: "Berbie Princess",
    },
    {
      src: "https://i.ibb.co/FnSZw7p/berbeHat.jpg",
      width: 520,
      height: 250,
      caption: "Princess with hat",
    },
    {
      src: "https://i.ibb.co/qypmqV0/download-2.jpg",
      width: 320,
      height: 212,
      caption: "Cute Princess",
    },
    {
      src: "https://i.ibb.co/xHHjLt9/berbeP.jpg",
      width: 320,
      height: 150,
      caption: "Snow Princess",
    },
    {
      src: "https://i.ibb.co/BrKx59f/images-2.jpg",
      width: 420,
      height: 176,
      caption: "Couple",
    },
    {
      src: "https://i.ibb.co/8mHT91t/berStyle.jpg",
      width: 420,
      height: 190,
      caption: "Stylish Princess",
    },
    {
      src: "https://i.ibb.co/Fxbm06w/berbie-Black.jpg",
      width: 420,
      height: 200,
      caption: "Black Princess",
    },

    {
      src: "https://i.ibb.co/Mfgz82Q/download-3.jpg",
      width: 320,
      height: 212,
      caption: "Pinky Princess",
    },
    {
      src: "https://i.ibb.co/3fjT2jC/bervie-White.jpg",
      width: 320,
      height: 112,
      caption: "White Princess",
    },
  ];
  return (
    <div>
      <SectionTitle heading={"Berbie Gallery"}></SectionTitle>
      <div className="md:w-full mx-auto grid">
        <Gallery images={images}></Gallery>
      </div>
    </div>
  );
};

export default DollMedia;
