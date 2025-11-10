import React from "react";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-base-200 text-center p-5">
      <img
        src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
        alt="404 Error"
        className="max-w-xs md:max-w-sm lg:max-w-md mb-6"
      />
      <h1 className="text-4xl font-bold text-primary mb-2">404 - Page Not Found</h1>
      <p className="text-gray-500 mb-6">
        Oops! The page you're looking for doesn’t exist or has been moved.
      </p>
      <Link to="/" className="btn btn-primary">
        Back to Home
      </Link>
    </div>
  );
};

export default ErrorPage;
