import React from "react";
import Banner from "../Banner/Banner";

import ToyGallery from "../ToyGallery/ToyGallery";
import ToySponsor from "../ToySponsor/ToySponsor";
import SliderRotate from "../SliderRotate/SliderRotate";
import ShopByCategory from "../ShopByCategory/ShopByCategory";
import ToyShop from "../ToyShop/ToyShop";
import DollMedia from "../DollMedia/DollMedia";

const Home = () => {
  return (
    <div>
      <Banner />
      <DollMedia />
      <ShopByCategory />

      <ToyGallery />
      <ToyShop />
      <ToySponsor />
      <SliderRotate />
    </div>
  );
};

export default Home;
