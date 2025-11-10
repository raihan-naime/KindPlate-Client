import React, { use, useEffect, useState } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import Swal from "sweetalert2";

const ViewDetails = () => {
  const { user } = use(AuthContext);
  const food = useLoaderData();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [request, setRequest] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();
  console.log({ user, food });

  const handleFoodRequest = (e) => {
    e.preventDefault();
    const userName = user.displayName;
    const userEmail = user.email;
    const photoURL = user.photoURL;
    const foodId = id;
    const status = "pending";
    const location = e.target.location.value;
    const reason = e.target.reason.value;
    const contact = e.target.contact.value;
    const foodRequest = {
      userName,
      userEmail,
      photoURL,
      foodId,
      status,
      location,
      reason,
      contact,
    };
    // console.log(foodRequest);
    // /food-request

    fetch("http://localhost:3000/food-request", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(foodRequest),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setIsModalOpen(false);
        navigate("/availableFoods");
      });
  };

  // /food-request/:foodId

  useEffect(() => {
    fetch(`http://localhost:3000/food-request/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setRequest(data);
      });
  }, [id]);

  return (
    <div>
      <div>
        <h2 className="text-3xl font-bold text-center mb-5 text-primary">
          Food Details
        </h2>
        <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-2xl my-10">
          <img
            src={food.food_image}
            alt={food.food_name}
            className="w-full h-64 object-cover rounded-xl mb-5"
          />

          <h2 className="text-2xl font-bold text-primary mb-3">
            {food.food_name}
          </h2>

          <div className="mb-3">
            <p className="text-sm">
              <span className="font-medium">Quantity:</span>{" "}
              {food.food_quantity}
            </p>
            <p className="text-sm">
              <span className="font-medium">Pickup Location:</span>{" "}
              {food.pickup_location}
            </p>
            <p className="text-sm">
              <span className="font-medium">Expire Date:</span>{" "}
              {food.expire_date}
            </p>
          </div>

          <div className="mb-3 p-4 bg-gray-50 rounded-lg flex items-center space-x-4">
            <img
              src={food.donator_image}
              alt={food.donator_name}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <p className="font-medium">{food.donator_name}</p>
              <p className="text-sm text-gray-600">{food.donator_email}</p>
            </div>
          </div>

          {food.notes && (
            <div className="mb-5">
              <h3 className="font-semibold mb-1">Additional Notes:</h3>
              <p className="text-sm text-gray-700">{food.notes}</p>
            </div>
          )}

          <button
            onClick={() => setIsModalOpen(true)}
            className="btn btn-primary w-full"
          >
            Request Food
          </button>

          {/* Modal */}
          {isModalOpen && (
            <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">
              <div className="bg-white p-6 rounded-2xl w-96 shadow-lg">
                <h3 className="text-xl font-semibold mb-3 text-center">
                  Request This Food
                </h3>
                <form onSubmit={handleFoodRequest} className="space-y-3">
                  <input
                    type="text"
                    name="location"
                    placeholder="Write your location"
                    required
                    className="input input-bordered w-full"
                  />
                  <textarea
                    name="reason"
                    placeholder="Why do you need this food?"
                    required
                    className="textarea textarea-bordered w-full"
                  ></textarea>
                  <input
                    type="text"
                    name="contact"
                    placeholder="Contact number"
                    required
                    className="input input-bordered w-full"
                  />
                  <div className="flex justify-between mt-4">
                    <button type="submit" className="btn btn-success">
                      Submit Request
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsModalOpen(false)}
                      className="btn btn-outline"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>

      {food.donator_email === user.email && (
  <div className="my-8 px-2 sm:px-4 lg:px-8">
    <h2 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4 text-center sm:text-left">
      Food Requests
    </h2>

    {request.length === 0 ? (
      <p className="text-center sm:text-left">No requests yet.</p>
    ) : (
      <div className="overflow-x-auto">
        <table className="table w-full border border-gray-300 text-sm sm:text-base">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-2 py-2">User</th>
              <th className="px-2 py-2 hidden sm:table-cell">Location</th>
              <th className="px-2 py-2 hidden md:table-cell">Reason</th>
              <th className="px-2 py-2 hidden md:table-cell">Contact</th>
              <th className="px-2 py-2">Status</th>
              <th className="px-2 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {request.map((req) => (
              <tr key={req._id} className="hover:bg-gray-50">
                <td className="flex items-center gap-2 py-2 px-2">
                  <img
                    src={req.photoURL}
                    alt=""
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover"
                  />
                  <span className="truncate max-w-[100px] sm:max-w-none">
                    {req.userName}
                  </span>
                </td>
                <td className="hidden sm:table-cell">{req.location}</td>
                <td className="hidden md:table-cell">{req.reason}</td>
                <td className="hidden md:table-cell">{req.contact}</td>
                <td className="px-2 py-2">
                  <span
                    className={`px-2 py-1 rounded text-xs sm:text-sm ${
                      req.status === "pending"
                        ? "bg-yellow-200 text-yellow-800"
                        : req.status === "accepted"
                        ? "bg-green-200 text-green-800"
                        : "bg-red-200 text-red-800"
                    }`}
                  >
                    {req.status}
                  </span>
                </td>
                <td className="flex flex-col sm:flex-row gap-2 px-2 py-2">
                  <button className="btn btn-xs sm:btn-sm btn-success">
                    Accept
                  </button>
                  <button className="btn btn-xs sm:btn-sm btn-error">
                    Reject
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )}
  </div>
)}

    </div>
  );
};

export default ViewDetails;
