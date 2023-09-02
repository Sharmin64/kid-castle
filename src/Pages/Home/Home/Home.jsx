import React from "react";
import Banner from "../Banner/Banner";

import ToyGallery from "../ToyGallery/ToyGallery";
import ToySponsor from "../ToySponsor/ToySponsor";
import SliderRotate from "../SliderRotate/SliderRotate";
import ShopByCategory from "../ShopByCategory/ShopByCategory";
import ToyShop from "../ToyShop/ToyShop";
import DollMedia from "../DollMedia/DollMedia";
import Berbie from "../Berbie/Berbie";
import ToyTv from "../ToyTv/ToyTv";

const Home = () => {
  return (
    <div>
      <Banner />
      <DollMedia />
      <ToyTv />
      <ShopByCategory />

      <ToyGallery />
      <ToyShop />
      <ToySponsor />
      <Berbie />
      <SliderRotate />
    </div>
  );
};

export default Home;
