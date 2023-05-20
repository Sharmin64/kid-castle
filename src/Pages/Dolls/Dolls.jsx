import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import DollRow from "./DollRow";

const Dolls = () => {
  const { user } = useContext(AuthContext);
  const [addDolls, setAddDolls] = useState([]);

  const url = `http://localhost:5005/dolls?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setAddDolls(data));
  }, []);

  const handleDelete = (id) => {
    const proceed = confirm("Are you sure you wanna delete!");
    if (proceed) {
      fetch(`http://localhost:5005/dolls/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("deleted successful");
            const remaining = addDolls.filter((addDoll) => addDoll._id !== id);
            setAddDolls(remaining);
          }
        });
    }
  };

  const handleUpdate = (id) => {
    fetch(`http://localhost:5005/dolls/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "update" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          //?update
          const remaining = addDolls.filter((addDoll) => addDoll._id !== id);
          const updated = addDolls.find((addDoll) => addDoll._id === id);
          updated.status = "update";
          const newAddDolls = [updated, ...remaining];
          setAddDolls(newAddDolls);
        }
      });
  };
  return (
    <div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>image</th>
              <th>Name</th>
              <th>Email</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {addDolls.map((addDoll) => (
              <DollRow
                key={addDoll._id}
                addDoll={addDoll}
                handleDelete={handleDelete}
                handleUpdate={handleUpdate}
              ></DollRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dolls;
