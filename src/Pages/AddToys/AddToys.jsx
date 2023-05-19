import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
//import Swal from "sweetalert2/dist/sweetalert2.js";
//import "sweetalert2/src/sweetalert2.scss";

const AddToys = () => {
  const addToy = useLoaderData();
  const { title, _id, price, user_image, toy_image, photoURL } = addToy;
  const { user } = useContext(AuthContext);

  const handleAddToy = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const date = form.date.value;
    const email = user?.email;
    const photo = form.photo.value;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const addToy = {
      seller: name,
      email,
      //user_image,
      photoURL,
      date,
      price,
    };
    console.log(addToy);

    fetch("http://localhost:5005/dolls", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addToy),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          //Swal.fire({
          //  position: "top-end",
          //  icon: "success",
          //  title: "doll added successfully",
          //  showConfirmButton: false,
          //  timer: 1500,
          //});
          alert("toys added successfully");
        }
      });
  };
  return (
    <div className="mb-12">
      <h3 className="text-center text-3xl">add here some toyes: {title} </h3>
      <form onSubmit={handleAddToy}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              defaultValue={user?.displayName}
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Date</span>
            </label>
            <input type="date" name="date" className="input input-bordered" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              name="email"
              placeholder="email"
              defaultValue={user?.email}
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo</span>
            </label>
            <input type="text" name="photo" className="input input-bordered" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="text"
              name="price"
              defaultValue={"$" + price}
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Quantity</span>
            </label>
            <input
              type="text"
              name="quantity"
              className="input input-bordered"
            />
          </div>
        </div>
        <div className="form-control mt-6">
          <input
            className="btn btn-primary btn-block"
            type="submit"
            value="Add Toy"
          />
        </div>
      </form>
    </div>
  );
};

export default AddToys;
