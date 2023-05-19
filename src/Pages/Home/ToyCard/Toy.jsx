import React from "react";
import { Link } from "react-router-dom";

const Toy = ({ toy }) => {
  const { _id, toy_image, price, name } = toy;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={toy_image} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">Price: {price}</h2>
        <p>Toy name:{name}</p>
        <div className="card-actions">
          <Link to={`/addToys/${_id}`}>
            <button className="btn btn-primary">Veiw Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Toy;
