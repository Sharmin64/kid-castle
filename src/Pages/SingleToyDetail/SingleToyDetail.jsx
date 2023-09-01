import React from "react";
import {useLoaderData} from "react-router-dom";
import {Rating} from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";

const SingleToyDetail = () => {
  const toyDetails = useLoaderData();
  console.log("........toy", toyDetails);

  const {
    name,
    description,
    photo,
    price,
    quantity,
    rating,
    sellerName,
    sellerEmail,
  } = toyDetails;

  return (
    <div className="min-h-screen flex sm:flex-col">
      <div className="card mt-10  ">
        <figure>
          <img className="img-fluid md:w-fit " src={photo} alt="Album" />
        </figure>
        <div className="card-body text-center ">
          <h2 className="text-3xl font-bold">Name : {name}</h2>
          <h2 className=" text-2xt font-semibold">Price : ${price}</h2>
          <h2 className="text-2xt font-semibold">Quantity : {quantity}</h2>

          {sellerName ? (
            <h2 className="text-2xt font-semibold">
              Seller Name :{sellerName?.sellerName}
            </h2>
          ) : (
            ""
          )}
          <h2 className="text-2xt font-semibold">
            Seller Email : {sellerEmail}
            <h2 className="flex justify-center items-center gap-4">
              <Rating
                style={{maxWidth: 250}}
                value={Math.round(rating)}
                readOnly
              />
              <span className="text-lg">{rating}</span>
            </h2>
          </h2>
          <p>
            <span className="text-2xl font-bold">Description </span>
            <span className="text-lg">{description}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleToyDetail;
