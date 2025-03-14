import React from "react";
import { Link } from "react-router-dom";
import { FaExclamationCircle } from "react-icons/fa";

const NotFoundPage = () => {
  return (
    <section className="text-center flex flex-col justify-center items-center min-h-screen">
      <FaExclamationCircle className="text-yellow-400 text-6xl mb-4" />
      <h1 className="text-6xl font-bold mb-4">404 Not Found</h1>
      <p className="text-xl mb-5">This page does not exist</p>
      <Link
        to="/"
        className="text-white bg-teal hover:bg-teal-dark rounded-md px-3 py-2 mt-4 transition-transform duration-200 ease-in-out hover:scale-110"
      >
        Go Back
      </Link>
    </section>
  );
};

export default NotFoundPage;
