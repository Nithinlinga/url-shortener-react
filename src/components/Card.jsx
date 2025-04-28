import React from 'react';

const Card = ({ title, desc }) => {
  return (
    <div className="bg-white border border-gray-300 p-6 rounded-lg hover:shadow-xl transition duration-300">
      <h3 className="text-gray-800 text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{desc}</p>
    </div>
  );
};

export default Card;
