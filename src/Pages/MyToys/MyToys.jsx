import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5005/dolls?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyToys(data));
  }, [user]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5005/dolls/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("delete....", data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };

  return (
    <div className="min-h-screen ">
      <div>
        <h1 className="text-center text-5xl py-6 mb-5   bg-purple-100 text-purple-500 font-bold ">
          My Toys
        </h1>
      </div>
      <div className="overflow-x-auto container mx-auto  w-full ">
        <table className="table  w-full">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              {/*<th>Toy photo url</th>*/}
              <th></th>
              <th>Toy name</th>
              <th>Sub Category</th>
              <th>Price</th>
              <th>Rating</th>
              <th>Quantity</th>
              <th>Action</th>

              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {myToys?.map((myToy, index) => (
              <tr key={myToy._id}>
                <td>{index + 1}</td>

                <td>
                  {" "}
                  <img className="rounded w-12 h-12" src={myToy.photo} alt="" />
                </td>

                <td>{myToy.name}</td>
                <td>{myToy.category}</td>
                <td>{myToy.price}</td>
                <td>{myToy.rating}</td>
                <td>{myToy.quantity}</td>
                <tb className=" flex gap-5">
                  <span>
                    <Link to={`/updateToy/${myToy._id}`}>
                      <button className="btn btn-primary  btn-sm">
                        Updated
                      </button>
                    </Link>
                  </span>
                  <span>
                    <button
                      onClick={() => handleDelete(myToy._id)}
                      className="btn btn-error  btn-sm"
                    >
                      Delete
                    </button>
                  </span>
                </tb>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;
