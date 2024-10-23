import React from "react";

const Card = ({ image, title }) => {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
    </div>
  );
};

export default Card;
