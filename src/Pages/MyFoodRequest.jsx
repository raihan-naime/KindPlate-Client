import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import FoodRequestTable from "../Components/FoodRequestTable";

const MyFoodRequest = () => {
  const { user } = use(AuthContext);
  const [foodRequest, setFoodRequest] = useState([]);
  // console.log(foodRequest);

  useEffect(() => {
    fetch(
      `https://kind-server-plate.vercel.app/my-food-request?email=${user.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setFoodRequest(data);
      });
  }, [user]);

  return (
    <div className="overflow-x-auto mt-8">
      <h2 className="text-2xl font-bold text-center mb-4 text-[#3E3F29]">
        Food Requests
      </h2>

      <table className="table w-full border border-purple-100 rounded-lg shadow-md">
        <thead className="bg-[#3E3F29] text-white">
          <tr>
            <th>User</th>
            <th>Location</th>
            <th>Reason</th>
            <th>Contact</th>

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
              <FoodRequestTable
                key={req._id}
                setFoodRequest={setFoodRequest}
                foodRequest={foodRequest}
                req={req}
              ></FoodRequestTable>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default MyFoodRequest;
