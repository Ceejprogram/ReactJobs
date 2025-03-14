import React from "react";

const Hero = ({
  title = "Become a React Developer",
  subtitle = "Get a React job that suits your skills",
}) => {
  return (
    <section className="bg-teal-to-white min-h-[70vh] md:min-h-[85vh] flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-black sm:text-5xl md:text-6xl tracking-tight">
            {title}
          </h1>
          <p className="mt-4 text-xl text-dark-gray">{subtitle}</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;