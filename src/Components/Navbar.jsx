import React, { use } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import { toast } from "react-toastify";
import { FaUserSecret } from "react-icons/fa";

const Navbar = () => {
  const { user, signOutUser } = use(AuthContext);

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        toast.success("Log Out Successfully");
      })
      .catch((err) => {
        toast.error(err);
      });
  };

  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-primary font-semibold" : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/availableFoods"
          className={({ isActive }) =>
            isActive ? "text-primary font-semibold" : ""
          }
        >
          Available Foods
        </NavLink>
      </li>

      {/* {user && (
        <>
          <li>
            <NavLink
              to="/add-food"
              className={({ isActive }) =>
                isActive ? "text-primary font-semibold" : ""
              }
            >
              Add Food
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/manage-my-foods"
              className={({ isActive }) =>
                isActive ? "text-primary font-semibold" : ""
              }
            >
              Manage My Foods
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/my-food-request"
              className={({ isActive }) =>
                isActive ? "text-primary font-semibold" : ""
              }
            >
              My Food Requests
            </NavLink>
          </li>
        </>
      )} */}
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-md px-5">
      {/* Left: Logo */}
      <div className="navbar-start">
        {/* Dropdown menu for mobile */}
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <Link
          to="/"
          className="text-2xl font-bold text-primary flex items-center gap-2"
        >
          🍽️ KindPlate
        </Link>
      </div>

      {/* Center: Links for large devices */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>

      {/* Right: Auth */}
      <div className="navbar-end">
        {!user ? (
          <Link to="/login" className="btn btn-outline">
            Login
          </Link>
        ) : (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 border border-purple-700 rounded-full">
                <img
                  src={user?.photoURL || <FaUserSecret />}
                  alt="User Avatar"
                />
              </div>
            </label>

            <ul
              tabIndex={0}
              className="mt-3 z-1 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink to="/add-food">Add Food</NavLink>
              </li>
              <li>
                <NavLink to="/manage-my-foods">Manage My Foods</NavLink>
              </li>
              <li>
                <NavLink to="/my-food-request">My Food Requests</NavLink>
              </li>
              <li>
                <button onClick={handleSignOut}>Logout</button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
