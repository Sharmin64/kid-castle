import React, { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { useLoaderData } from "react-router-dom";

const UpdateToy = () => {
  const { user } = useContext(AuthContext);
  const toys = useLoaderData();
  const { photo, name, price, rating, quantity, description, _id } = toys;

  const handleUpdateToy = (event) => {
    event.preventDefault();
    const form = event.target;
    const photo = form.photo.value;
    const name = form.name.value;
    const sellerName = user?.displayName;
    const sellerEmail = user?.email;
    const category = form.category.value;
    const price = parseFloat(form.price.value);
    const rating = form.rating.value;
    const quantity = form.quantity.value;
    const description = form.description.value;

    const updateToy = {
      photo,
      name,
      sellerEmail,
      sellerName,
      category,
      price,
      rating,
      quantity,
      description,
    };
    console.log(updateToy);

    fetch(`http://localhost:5005/update-toy/${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateToy),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <div className="container mx-auto mb-10 ">
      <form onSubmit={handleUpdateToy}>
        <div className=" border shadow-md p-10 rounded-sm">
          <h1 className="text-4xl text-primary font-bold underline text-center">
            Update toy
          </h1>
          <div className="card-body md:grid sm:grid-cols-1 md:grid-cols-2  gap-4 ">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg ">Toy Picture URL</span>
              </label>
              <input
                type="text"
                name="photo"
                defaultValue={photo}
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg">Toy Name</span>
              </label>
              <input
                type="text"
                name="name"
                defaultValue={name}
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg">Seller Name</span>
              </label>
              <input
                type="text"
                name="sellerName"
                defaultValue={user?.displayName}
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg">Seller Email</span>
              </label>
              <input
                type="email"
                name="sellerEmail"
                defaultValue={user?.email}
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <select name="category">
                <option>Select a Category</option>
                <option value="Baby Dolls">Baby Dolls</option>
                <option value="Barbie">Barbie</option>
                <option value="American Girl">American Girl</option>
              </select>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg">Price</span>
              </label>
              <input
                type="text"
                name="price"
                defaultValue={price}
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg">Rating</span>
              </label>
              <input
                type="text"
                name="rating"
                defaultValue={rating}
                className="input input-bordered"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg">Available quantity</span>
              </label>
              <input
                type="text"
                name="quantity"
                defaultValue={quantity}
                className="input input-bordered"
              />
            </div>
            <div className="form-control col-span-2">
              <label className="label">
                <span className="label-text text-lg">Detail description</span>
              </label>
              <textarea
                name="description"
                defaultValue={description}
                className="textarea textarea-bordered textarea-lg w-full"
              ></textarea>
            </div>
          </div>
        </div>
        <div className="form-control mt-6">
          <input
            type="submit"
            className="btn btn-primary"
            value="Update a Toy"
          />
        </div>
      </form>
    </div>
  );
};

export default UpdateToy;
