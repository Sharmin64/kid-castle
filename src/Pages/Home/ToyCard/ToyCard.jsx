import React, { useEffect, useState } from "react";
import Toy from "./Toy";
import AOS from "aos";
import "aos/dist/aos.css";

const ToyCard = () => {
  AOS.init({
    disable: false,
    startEvent: "DOMContentLoaded",
    initClassName: "aos-init",
    animatedClassName: "aos-animate",
    useClassNames: false,
    disableMutationObserver: false,
    debounceDelay: 50,
    throttleDelay: 99,

    offset: 120,
    delay: 0,
    duration: 400,
    easing: "ease",
    once: false,
    mirror: false,
    anchorPlacement: "top-bottom",
  });
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5005/dolls")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);
  return (
    <div
      data-aos="zoom-in"
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="false"
      data-aos-anchor-placement="top-center"
      className="grid grid-cols-1 lg:grid-cols-3 gap-4"
    >
      {toys.map((toy) => (
        <Toy key={toy._id} toy={toy}></Toy>
      ))}
    </div>
  );
};

export default ToyCard;
