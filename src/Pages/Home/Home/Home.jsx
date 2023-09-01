import React from "react";
import Banner from "../Banner/Banner";

import ToyGallery from "../ToyGallery/ToyGallery";
import ToySponsor from "../ToySponsor/ToySponsor";
import SliderRotate from "../SliderRotate/SliderRotate";
import ShopByCategory from "../ShopByCategory/ShopByCategory";
import ToyShop from "../ToyShop/ToyShop";

const Home = () => {
  return (
    <div>
      <Banner />
      <ShopByCategory />

      <ToyGallery />
      <ToyShop />
      <ToySponsor />
      <SliderRotate />
    </div>
  );
};

export default Home;
