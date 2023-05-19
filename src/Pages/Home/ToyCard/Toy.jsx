import React from "react";

const Toy = ({ toy }) => {
  const { toy_image, price, name } = toy;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={toy_image} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">Price: {price}</h2>
        <p>Toy name:{name}</p>
        <div className="card-actions">
          <button className="btn btn-primary">Veiw Details</button>
        </div>
      </div>
    </div>
  );
};

export default Toy;
