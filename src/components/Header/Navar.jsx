import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ user, onLogout }) => {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div className="text-xl font-bold">
        <Link to="/">Crowdcube</Link>
      </div>
      <div className="space-x-4">
        <Link to="/" className="hover:text-gray-300">Home</Link>
        <Link to="/campaigns" className="hover:text-gray-300">All Campaigns</Link>
        {user && (
          <>
            <Link to="/add-campaign" className="hover:text-gray-300">Add New Campaign</Link>
            <Link to="/my-campaigns" className="hover:text-gray-300">My Campaigns</Link>
            <Link to="/my-donations" className="hover:text-gray-300">My Donations</Link>
          </>
        )}
        {!user ? (
          <>
            <Link to="/login" className="hover:text-gray-300">Login</Link>
            <Link to="/register" className="hover:text-gray-300">Register</Link>
          </>
        ) : (
          <div className="relative group">
            <img
              src={user.photoURL}
              alt="User Avatar"
              className="w-8 h-8 rounded-full cursor-pointer"
            />
            <div className="absolute hidden group-hover:block bg-gray-700 text-white text-sm p-2 rounded shadow-lg">
              {user.displayName}
            </div>
            <button onClick={onLogout} className="ml-4 hover:text-red-500">
              Log out
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
