import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";

const MyFoodRequest = () => {
  const { user } = use(AuthContext);
  const [foodRequest, setFoodRequest] = useState([]);
  console.log(foodRequest);

  useEffect(() => {
    fetch(`http://localhost:3000/my-food-request?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setFoodRequest(data);
      });
  }, [user]);

  return (
    <div className="overflow-x-auto mt-8">
      <h2 className="text-2xl font-bold text-center mb-4 text-primary">
        Food Requests
      </h2>

      <table className="table w-full border rounded-lg shadow-md">
        <thead className="bg-primary text-white">
          <tr>
            <th>User</th>
            <th>Location</th>
            <th>Reason</th>
            <th>Contact</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {foodRequest.length === 0 ? (
            <tr>
              <td colSpan="6" className="text-center py-6 text-gray-500">
                No food requests found.
              </td>
            </tr>
          ) : (
            foodRequest.map((req) => (
              <tr key={req._id} className="hover:bg-gray-50 border-b">
                <td>
                  <div className="flex items-center gap-2">
                    <img
                      src={req.photoURL}
                      alt={req.userName}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold">{req.userName}</p>
                      <p className="text-sm text-gray-500">{req.userEmail}</p>
                    </div>
                  </div>
                </td>
                <td>{req.location}</td>
                <td>{req.reason}</td>
                <td>{req.contact}</td>
                <td>
                  <span
                    className={`badge ${
                      req.status === "pending"
                        ? "badge-warning"
                        : req.status === "accepted"
                        ? "badge-success"
                        : "badge-error"
                    }`}
                  >
                    {req.status}
                  </span>
                </td>
                <td>
                  <div className="flex gap-2">
                    <button
                      
                      className="btn btn-sm btn-success"
                      disabled={req.status !== "pending"}
                    >
                      Accept
                    </button>
                    <button
                      
                      className="btn btn-sm btn-error"
                      disabled={req.status !== "pending"}
                    >
                      Reject
                    </button>
                  </div>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default MyFoodRequest;
