import React, { useEffect, useState } from "react";
import Toy from "./Toy";

const ToyCard = () => {
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5005/toys")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      {toys.map((toy) => (
        <Toy key={toy._id} toy={toy}></Toy>
      ))}
    </div>
  );
};

export default ToyCard;
