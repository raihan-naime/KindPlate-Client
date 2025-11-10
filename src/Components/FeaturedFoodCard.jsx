import React from "react";
import { Link } from "react-router";

const FeaturedFoodCard = ({ food }) => {
  return (
    <div className="h-130">
      {/* <div className=" rounded-xl shadow-md overflow-hidden bg-white hover:shadow-lg transition-shadow">
        <img
          src={food.food_image}
          alt={food.food_name}
          className="w-full h-48 object-cover"
        />

        <div className="p-4 space-y-2">
          <h3 className="text-lg font-semibold text-primary">
            {food.food_name}
          </h3>

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

          <Link
            to={`/food/${food._id}`}
            className="btn btn-primary w-full mt-2"
          >
            View Details
          </Link>
        </div>
      </div> */}

      {/* new card */}
      <div className="service-card  shadow-xl cursor-pointer snap-start shrink-0 py-4 px-3 bg-white flex flex-col  gap-3 transition-all duration-300 group hover:bg-[#32323d]">
        <img
          src={food.food_image}
          alt={food.food_name}
          className="w-full h-48 object-cover"
        />

        <div className="p-4 space-y-2">
          <h3 className="font-bold text-xl text-black/80 group-hover:text-white transition-colors">
            {food.food_name}
          </h3>

          <div className="flex items-center space-x-2">
            <img
              src={food.donator_image}
              alt={food.donator_name}
              className="w-8 h-8 rounded-full object-cover"
            />
            <p className="text-gray-400 text-sm">{food.donator_name}</p>
          </div>

          <p className="text-sm">
            <span className="text-gray-400 text-sm">Quantity:</span>{" "}
            <span className="text-gray-400 text-sm">{food.food_quantity}</span>
          </p>
          <p className="text-sm">
            <span className="text-gray-400 text-sm">Pickup Location:</span>{" "}
            <span className="text-gray-400 text-sm">
              {food.pickup_location}
            </span>
          </p>
          <p className="text-sm">
            <span className="text-gray-400 text-sm">Expire Date:</span>{" "}
            <span className="text-gray-400 text-sm">{food.expire_date}</span>
          </p>

          <Link
            to={`/food/${food._id}`}
            className="flex w-full justify-center gap-2 items-center mx-auto shadow-xl text-lg bg-gray-50 backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-emerald-500 hover:text-gray-500 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group"
          >
            View Details
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
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedFoodCard;
