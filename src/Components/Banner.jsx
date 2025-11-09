import React from "react";
import { Link } from "react-router";

const Banner = () => {
  return (
    <div
      className="hero"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=1600&q=80')",
      }}
    >
      {/* Overlay */}
      <div className="hero-overlay bg-black bg-opacity-60"></div>

      {/* Content */}
      <div className="hero-content text-center text-neutral-content px-5">
        <div className="max-w-xl">
          <h1 className="mb-5 text-4xl md:text-5xl font-bold text-white">
            Share Food, Spread Kindness 🍛
          </h1>
          <p className="mb-6 text-gray-200 text-sm md:text-base">
            PlateShare connects people who have extra food with those who need it.
            Join us in reducing food waste and helping your community today.
          </p>
          <Link to="/available-foods">
            <button className="btn btn-primary text-white px-6">
              View All Foods
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
