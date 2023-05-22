import React from "react";
import { Link } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";

const ToyCard = ({ doll }) => {
  const { photo, name, price, rating, _id } = doll;

  return (
    <div className="md:card md:w-96 md:mx-4 sm:mx-5 hover:bg-purple-200   shadow-xl">
      <figure className="md:border-8">
        <img className="md:w-96" src={photo} alt="photo" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <h2 className="card-title"> Price : $ {price}</h2>
        <h2 className="card-title">
          <Rating
            style={{ maxWidth: 150 }}
            value={Math.round(rating)}
            readOnly
          />
          {rating}
        </h2>

        <div className="card-actions justify-end">
          <Link to={`/singleToyDetail/${_id}`}>
            <button className="btn btn-primary font-mono">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ToyCard;
