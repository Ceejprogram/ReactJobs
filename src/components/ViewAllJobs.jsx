import React from "react";
import { Link } from "react-router-dom";

const ViewAllJobs = () => {
  return (
    <section className="m-auto max-w-lg my-10 px-6">
      <Link
        to="/jobs"
        className="block bg-teal text-white text-center py-4 px-6 rounded-xl hover:bg-teal-dark transition-transform duration-200 ease-in-out hover:scale-110"
      >
        View All Jobs
      </Link>
    </section>
  );
};

export default ViewAllJobs;
