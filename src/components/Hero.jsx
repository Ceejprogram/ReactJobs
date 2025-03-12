import React from "react";

const Hero = ({
  title = "Become a React Developer",
  subtitle = "Get a React job that suits your skills",
}) => {
  return (
    <section className="bg-teal py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl tracking-tight">
            {title}
          </h1>
          <p className="mt-4 text-xl text-white opacity-90">{subtitle}</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
