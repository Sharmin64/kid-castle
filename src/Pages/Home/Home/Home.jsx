import React from "react";
import Banner from "../Banner/Banner";
import ToyCard from "../ToyCard/ToyCard";
import ToyGallery from "../ToyGallery/ToyGallery";

const Home = () => {
  return (
    <div>
      <Banner />
      <ToyCard />
      <ToyGallery />
    </div>
  );
};

export default Home;
