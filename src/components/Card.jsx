import React from 'react';

const Card = ({ title, desc }) => {
  return (
    <div className="bg-[#1a1a1a] border border-gray-700 p-6 rounded-lg hover:shadow-lg transition duration-300">
      <h3 className="text-white text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-400 text-sm">{desc}</p>
    </div>
  );
};

export default Card;
