import React from "react";
import { Link } from "react-router-dom";
import Card from "./Card";

const HomeCards = () => {
  return (
    <section className="py-12 bg-light-gray">
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
          <Card>
            <h2 className="text-2xl font-bold text-dark-gray">
              For Developers
            </h2>
            <p className="mt-2 mb-4 text-dark-gray opacity-80">
              Browse our React jobs and start your career today
            </p>
            <Link
              to="/jobs"
              className="inline-block bg-dark-gray text-white rounded-lg px-4 py-2 hover:bg-gray-hover transition-transform duration-200 ease-in-out hover:scale-110"
            >
              Browse Jobs
            </Link>
          </Card>
          <Card bg="bg-teal">
            <h2 className="text-2xl font-bold text-white">For Employers</h2>
            <p className="mt-2 mb-4 text-white opacity-80">
              List your job to find the perfect developer for the role
            </p>
            <Link
              to="/add-job"
              className="inline-block bg-dark-gray text-white rounded-lg px-4 py-2 hover:bg-gray-hover transition-transform duration-200 ease-in-out hover:scale-110"
            >
              Add Job
            </Link>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HomeCards;
