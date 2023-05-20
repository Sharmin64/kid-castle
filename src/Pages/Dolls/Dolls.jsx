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
              <th>Name</th>
              <th>Job</th>
              <th>Email</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {addDolls.map((addDoll) => (
              <DollRow key={addDoll._id} addDoll={addDoll}></DollRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dolls;
