import React from "react";

const Card = ({ children, bg = "bg-[#EEEEEE]" }) => {
  return (
    <div
      className={`${bg} p-6 rounded-lg shadow-md transition-transform duration-200 ease-in-out hover:scale-105`}
    >
      {children}
    </div>
  );
};

export default Card;