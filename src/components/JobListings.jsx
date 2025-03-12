import React from "react";
import jobs from "../jobs.json";
import JobListing from "./JobListing";

const JobListings = () => {
  const recentJobs = jobs.slice(0, 3);

  return (
    <section className="bg-[#EEEEEE] px-4 py-12">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-[#393E46] mb-8 text-center">
          Browse Jobs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {recentJobs.map((job) => (
            <JobListing key={job.id} job={job} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobListings;
