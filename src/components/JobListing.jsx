import React from "react";
import { useState } from "react";

const JobListing = ({ job }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  let description = job.description;

  if (!showFullDescription) {
    description = description.substring(0, 110) + "...";
  }

  return (
    <div className="bg-white rounded-xl shadow-md relative transition-transform duration-200 ease-in-out hover:scale-105">
      <div className="p-6">
        <div className="mb-6">
          <div className="text-dark-gray opacity-70 my-2">{job.type}</div>
          <h3 className="text-xl font-bold text-dark-gray">{job.title}</h3>
        </div>

        <div className="mb-5 text-dark-gray opacity-80">{description}</div>

        <button
          onClick={() => setShowFullDescription((prevState) => !prevState)}
          className="text-teal mb-5 hover:text-teal-dark"
        >
          {showFullDescription ? "Less" : "More"}
        </button>

        <h3 className="text-teal mb-2 font-semibold">{job.salary} / Year</h3>

        <div className="border border-light-gray mb-5"></div>

        <div className="flex flex-col lg:flex-row justify-between mb-4">
          <div className="text-dark-gray mb-3">
            <i className="fa-solid fa-location-dot text-teal mr-1"></i>
            {job.location}
          </div>
          <a
            href={`/job/${job.id}`}
            className="h-[36px] bg-teal hover:bg-teal-dark text-white px-4 py-2 rounded-lg text-center text-sm transition-transform duration-200 ease-in-out hover:scale-110"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default JobListing;