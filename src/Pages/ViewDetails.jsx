import React, { use, useEffect, useState } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import Swal from "sweetalert2";
import RequestData from "../Components/RequestData";

const ViewDetails = () => {
  const { user } = use(AuthContext);
  const food = useLoaderData();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [request, setRequest] = useState([]);

  const { id } = useParams();
  // const navigate = useNavigate();
  // console.log({ user, food });

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
    const foodStatus = 'Pending';
    const foodRequest = {
      userName,
      userEmail,
      photoURL,
      foodId,
      status,
      location,
      reason,
      contact,
      foodStatus
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
        // console.log(data);
        setIsModalOpen(false);
        // navigate("/availableFoods");
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
        <h2 className="text-3xl font-bold text-center my-5 text-[#3E3F29]">
          Food Details
        </h2>
        <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-2xl my-10">
          <img
            src={food.food_image}
            alt={food.food_name}
            className="w-full h-64 object-cover rounded-xl mb-5"
          />

          <h2 className="text-2xl font-bold text-[#3E3F29] mb-3">
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
            className="flex w-full justify-center gap-2 items-center mx-auto shadow-xl text-lg bg-gray-50 backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-emerald-500 hover:text-gray-500 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group"
          >
            Request Food
            <svg
              class="w-8 h-8 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-2 rotate-45"
              viewBox="0 0 16 19"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                class="fill-gray-800 group-hover:fill-gray-800"
              ></path>
            </svg>
          </button>

          {/* Modal */}
          {isModalOpen && (
            <div className="fixed inset-0  bg-black/60 flex justify-center items-center z-50">
              <div className="bg-white p-6 rounded-2xl w-1/2 shadow-lg">
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
                  <div className="flex gap-3 justify-between mt-4">
                    <button
                      type="submit"
                      className="flex text-green-500 w-full justify-center gap-2 items-center mx-auto shadow-xl text-lg bg-gray-50 backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-emerald-500 hover:text-gray-500 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group"
                    >
                      Submit Request
                      <svg
                        class="w-8 h-8 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-2 rotate-45"
                        viewBox="0 0 16 19"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                          class="fill-gray-800 group-hover:fill-gray-800"
                        ></path>
                      </svg>
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsModalOpen(false)}
                      className="flex w-full text-red-500 justify-center gap-2 items-center mx-auto shadow-xl text-lg bg-gray-50 backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-emerald-500 hover:text-gray-500 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group"
                    >
                      Cancel
                      <svg
                        class="w-8 h-8 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-2 rotate-45"
                        viewBox="0 0 16 19"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                          class="fill-gray-800 group-hover:fill-gray-800"
                        ></path>
                      </svg>
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
                    <th className="px-2 py-2"> Food Status</th>
                    <th className="px-2 py-2"> Request Status</th>
                    <th className="px-2 py-2">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {request.map((req) => (
                    <RequestData key={req._id} req={req}></RequestData>
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
