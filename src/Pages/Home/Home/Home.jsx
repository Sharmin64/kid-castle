import React from "react";
import Banner from "../Banner/Banner";

import ToyGallery from "../ToyGallery/ToyGallery";
import ToySponsor from "../ToySponsor/ToySponsor";
import SliderRotate from "../SliderRotate/SliderRotate";
import ShopByCategory from "../ShopByCategory/ShopByCategory";

const Home = () => {
  return (
    <div>
      <Banner />
      <ShopByCategory />

      <ToyGallery />
      <ToySponsor />
      <SliderRotate />
    </div>
  );
};

export default Home;
