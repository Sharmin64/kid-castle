import React from "react";
import {Gallery} from "react-grid-gallery";
import SectionTitle from "../../../hooks/SectionTitle";

const DollMedia = () => {
  const images = [
    {
      src: "https://i.ibb.co/bRPTPK3/images-3.jpg",
      width: 520,
      height: 320,
      caption: "After Rain",
    },
    {
      src: "https://i.ibb.co/qypmqV0/download-2.jpg",
      width: 320,
      height: 212,
      alt: "Boats (Jeshu John - designerspics.com)",
    },
    {
      src: "https://i.ibb.co/BrKx59f/images-2.jpg",
      width: 320,
      height: 212,
      alt: "Boats (Jeshu John - designerspics.com)",
    },

    {
      src: "https://i.ibb.co/Mfgz82Q/download-3.jpg",
      width: 320,
      height: 212,
    },
  ];
  return (
    <div>
      <SectionTitle heading={"Berbie Gallery"}></SectionTitle>
      <div className="w-full mx-0">
        <Gallery images={images}></Gallery>
      </div>
    </div>
  );
};

export default DollMedia;
