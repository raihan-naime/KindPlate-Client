import React from "react";
import { Link } from "react-router";

const FeaturedFoodCard = ({ food }) => {



  return (
    <div className=" rounded-xl shadow-md overflow-hidden bg-white hover:shadow-lg transition-shadow">
      <img
        src={food.food_image}
        alt={food.food_name}
        className="w-full h-48 object-cover"
      />

      <div className="p-4 space-y-2">
        <h3 className="text-lg font-semibold text-primary">{food.food_name}</h3>

        <div className="flex items-center space-x-2">
          <img
            src={food.donator_image}
            alt={food.donator_name}
            className="w-8 h-8 rounded-full object-cover"
          />
          <p className="text-sm font-medium">{food.donator_name}</p>
        </div>

        <p className="text-sm">
          <span className="font-medium">Quantity:</span> {food.food_quantity}
        </p>
        <p className="text-sm">
          <span className="font-medium">Pickup Location:</span>{" "}
          {food.pickup_location}
        </p>
        <p className="text-sm">
          <span className="font-medium">Expire Date:</span> {food.expire_date}
        </p>

        <Link to={`/food/${food._id}`} className="btn btn-primary w-full mt-2">View Details</Link>
      </div>
    </div>
  );
};

export default FeaturedFoodCard;
