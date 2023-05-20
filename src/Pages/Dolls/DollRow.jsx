import React from "react";

const DollRow = ({ addDoll }) => {
  const { seller, email, date, price, user_image } = addDoll;
  return (
    <div>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="avatar">
            <div className="rounded-ful w-12 h-12">
              {user_image && (
                <img src={user_image} alt="Avatar Tailwind CSS Component" />
              )}
            </div>
          </div>
        </td>
        <td>{seller}</td>
        <td>{email}</td>
        <td>$ {price}</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
    </div>
  );
};

export default DollRow;
