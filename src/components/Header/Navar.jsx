import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-blue-800 text-white p-4">
      <div className="container relative mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold">
          <NavLink to="/">Crowdcube</NavLink>
        </div>

        

        {/* Navigation links */}
        <div>
          <div
            className={`${isMenuOpen ? "block" : "hidden"
              } absolute z-10 md:static top-8 lg:p-0 p-10 bg-blue-800 md:bg-transparent left-[-18px] lg:w-full w-[90%] md:flex md:items-center md:space-x-4`}
          >
            <NavLink
              to="/"
              className="block md:inline-block p-2 hover:text-gray-300"
              activeClassName="text-gray-300 font-bold"
              exact
            >
              Home
            </NavLink>
            <NavLink
              to="/campaigns"
              className="block md:inline-block p-2 hover:text-gray-300"
              activeClassName="text-gray-300 font-bold"
            >
              All Campaigns
            </NavLink>
            {user && (
              <>
                <NavLink
                  to="/add-campaign"
                  className="block md:inline-block p-2 hover:text-gray-300"
                  activeClassName="text-gray-300 font-bold"
                >
                  Add New Campaign
                </NavLink>
                <NavLink
                  to="/my-campaigns"
                  className="block md:inline-block p-2 hover:text-gray-300"
                  activeClassName="text-gray-300 font-bold"
                >
                  My Campaigns
                </NavLink>
                <NavLink
                  to="/my-donations"
                  className="block md:inline-block p-2 hover:text-gray-300"
                  activeClassName="text-gray-300 font-bold"
                >
                  My Donations
                </NavLink>
              </>
            )}
            {!user ? (
              <>
                <NavLink
                  to="/login"
                  className="block md:inline-block p-2 hover:text-gray-300"
                  activeClassName="text-gray-300 font-bold"
                >
                  Login
                </NavLink>
                <NavLink
                  to="/register"
                  className="block md:inline-block p-2 hover:text-gray-300"
                  activeClassName="text-gray-300 font-bold"
                >
                  Register
                </NavLink>
              </>
            ) : (
              <div className="relative flex items-center group">
                <img
                  src={user.photoURL}
                  alt="User Avatar"
                  className="w-8 h-8 rounded-full cursor-pointer border border-white"
                />
                <div className="absolute top-12 hidden group-hover:block bg-gray-700 text-white text-sm p-2 rounded shadow-lg">
                  {user.displayName}
                </div>
                <button onClick={logOut} className="ml-4 hover:text-red-500">
                  Log out
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Menu button for small screens */}
        <button
          className="text-white md:hidden block focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
