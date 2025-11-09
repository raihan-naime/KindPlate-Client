import React from "react";
import { Link } from "react-router";

const FeaturedFoodCard = ({ food }) => {
  const { _id, food_name, food_image, donator_name, food_status } = food;

  return (
    <div className="card bg-base-100 shadow-lg hover:shadow-2xl transition duration-300 rounded-2xl overflow-hidden">
      {/* Food Image */}
      <figure className="h-48 w-full overflow-hidden">
        <img
          src={food_image}
          alt={food_name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </figure>

      {/* Card Content */}
      <div className="card-body">
        <h2 className="card-title text-lg font-semibold text-gray-800">
          {food_name}
        </h2>
        <p className="text-sm text-gray-600">Donator: {donator_name}</p>
        <p
          className={`text-sm font-medium ${
            food_status === "Available"
              ? "text-green-600"
              : "text-red-500"
          }`}
        >
          Status: {food_status}
        </p>

        <div className="card-actions justify-end mt-2">
          <Link to={`/food/${_id}`}>
            <button className="btn btn-sm bg-blue-600 hover:bg-blue-700 text-white">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedFoodCard;
