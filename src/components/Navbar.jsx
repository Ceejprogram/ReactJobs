import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";

const Navbar = () => {
  return (
    <nav className="bg-dark-gray border-b border-dark-gray">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
            <NavLink className="flex flex-shrink-0 items-center mr-6" to="/">
              <img className="h-10 w-auto" src={logo} alt="React Jobs" />
              <span className="hidden md:block text-white text-2xl font-bold ml-3">
                React Jobs
              </span>
            </NavLink>
            <div className="md:ml-auto">
              <div className="flex space-x-8">
                <NavLink
                  to="/"
                  className="text-white hover:text-teal transition-transform duration-200 ease-in-out hover:scale-110"
                >
                  Home
                </NavLink>
                <NavLink
                  to="/jobs"
                  className="text-white hover:text-teal transition-transform duration-200 ease-in-out hover:scale-110"
                >
                  Jobs
                </NavLink>
                <NavLink
                  to="/add-job"
                  className="text-white hover:text-teal transition-transform duration-200 ease-in-out hover:scale-110"
                >
                  Add Job
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;