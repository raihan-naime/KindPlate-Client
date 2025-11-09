import React, { useState } from "react";
import { Link, NavLink } from "react-router";
// import { AuthContext } from "../providers/AuthProvider"; // your auth context

const Navbar = () => {
//   const { user, logOut } = useContext(AuthContext); // user info from context
const [user, setUser] = useState(true)
// setUser(true)

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

      {/* Private Routes only when user is logged in */}
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
              to="/manage-foods"
              className={({ isActive }) =>
                isActive ? "text-primary font-semibold" : ""
              }
            >
              Manage My Foods
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/my-requests"
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
      {/* Left side: Logo & Name */}
      <div className="navbar-start">
        <Link
          to="/"
          className="text-2xl font-bold text-primary flex items-center gap-2"
        >
          🍽️ KindPlate
        </Link>
      </div>

      {/* Center: Links */}
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>

      {/* Right side: Auth buttons */}
      <div className="navbar-end">
        {!user ? (
          <Link to="/login" className="btn btn-primary">
            Login
          </Link>
        ) : (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 border border-purple-700 rounded-full">
                <img
                  src={user.photoURL || "https://i.ibb.co/8xR8b6P/user.png"}
                  alt="User Avatar"
                />
              </div>
            </label>

            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink to="/add-food">Add Food</NavLink>
              </li>
              <li>
                <NavLink to="/manage-foods">Manage My Foods</NavLink>
              </li>
              <li>
                <NavLink to="/my-requests">My Food Requests</NavLink>
              </li>
              <li>
                <button>Logout</button>
                {/* added */}
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
