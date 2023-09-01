import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import SectionTitle from "../../hooks/SectionTitle";

const AllToys = () => {
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch("https://assignment-11-toy-server-tau.vercel.app/dolls")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);
  return (
    <>
      <SectionTitle heading={"All toys"}></SectionTitle>
      <div className="overflow-x-auto w-full mt-16">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>Seller Name</th>
              <th>Toy Name</th>
              <th>Sub-category</th>
              <th>Price </th>
              <th>Available Quantity</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {toys?.map((toy) => (
              <tr key={toy._id}>
                <td>{toy.seller}</td>
                <td>{toy.name}</td>
                <td>{toy.category}</td>
                <td>{toy.price}</td>
                <td>{toy.quantity}</td>
                <td>
                  <Link to={`/singleToyDetail/${toy._id}`}>
                    <button className="btn btn-primary">View Details</button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AllToys;
