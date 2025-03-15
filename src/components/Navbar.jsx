import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";

const Navbar = () => {
  const linkClass = ({ isActive }) =>
    isActive
      ? "px-3 py-1 rounded-full transition-transform duration-200 ease-in-out font-bold inline-block whitespace-nowrap"
      : "px-3 py-1 rounded-full transition-transform duration-200 ease-in-out hover:font-bold inline-block whitespace-nowrap";

  return (
    <nav className="bg-teal w-full z-10 top-0 shadow-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row h-auto md:h-20 items-center justify-between py-4 md:py-0">
          <NavLink className="flex items-center mb-4 md:mb-0" to="/">
            <img className="h-8 md:h-10 w-auto" src={logo} alt="React Jobs" />
            <span className="ml-3 text-lg md:text-xl font-bold metallic-text">
              React Jobs
            </span>
          </NavLink>

          <div className="bg-white/30 backdrop-blur-lg px-6 py-2 rounded-full shadow-lg w-[85%] md:w-auto md:px-12 md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
            <div className="flex space-x-4 md:space-x-6 justify-center">
              <NavLink to="/" className={linkClass}>
                <span className="metallic-text hover:scale-110 inline-block">Home</span>
              </NavLink>
              <NavLink to="/jobs" className={linkClass}>
                <span className="metallic-text hover:scale-110 inline-block">Jobs</span>
              </NavLink>
              <NavLink to="/add-job" className={linkClass}>
                <span className="metallic-text hover:scale-110 inline-block">Add Role</span>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
