import React from "react";
import { useLoaderData } from "react-router";

const ViewDetails = () => {
    const food = useLoaderData();

    
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-2xl my-10">
      <img
        src={food.food_image}
        alt={food.food_name}
        className="w-full h-64 object-cover rounded-xl mb-5"
      />

      <h2 className="text-2xl font-bold text-primary mb-3">{food.food_name}</h2>

      <div className="mb-3">
        <p className="text-sm">
          <span className="font-medium">Quantity:</span> {food.food_quantity}
        </p>
        <p className="text-sm">
          <span className="font-medium">Pickup Location:</span> {food.pickup_location}
        </p>
        <p className="text-sm">
          <span className="font-medium">Expire Date:</span> {food.expire_date}
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

      <button className="btn btn-primary w-full">Request Food</button>
    </div>
  );
};

export default ViewDetails;
