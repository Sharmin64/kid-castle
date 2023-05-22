import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllToys = () => {
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5005/dolls")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);
  return (
    <div className="overflow-x-auto w-full">
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
                {/*<Link to={`/singleToyDetail/${toy._id}`}>
                  <button className="btn btn-primary">View Details</button>
                </Link>*/}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllToys;
