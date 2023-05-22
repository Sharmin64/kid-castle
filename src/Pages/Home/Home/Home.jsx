import React from "react";
import Banner from "../Banner/Banner";
import ToyCard from "../ToyCard/ToyCard";
import ToyGallery from "../ToyGallery/ToyGallery";
import ToySponsor from "../ToySponsor/ToySponsor";
import SliderRotate from "../SliderRotate/SliderRotate";

const Home = () => {
  return (
    <div>
      <Banner />

      <ToyCard />
      <ToyGallery />
      <ToySponsor />
      <SliderRotate />
    </div>
  );
};

export default Home;
