import React from "react";

const DollRow = ({ addDoll, handleDelete, handleUpdate }) => {
  const { _id, seller, email, price, user_image, status } = addDoll;

  return (
    <div>
      <tr>
        <th>
          <button
            onClick={() => handleDelete(_id)}
            className="btn btn-sm btn-circle btn-outline"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
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
          {status === "update" ? (
            <span>updated</span>
          ) : (
            <button
              onClick={() => handleUpdate(_id)}
              className="btn btn-ghost btn-xs"
            >
              Update
            </button>
          )}
        </th>
      </tr>
    </div>
  );
};

export default DollRow;
