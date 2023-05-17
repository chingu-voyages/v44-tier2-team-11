import React from 'react';

const CircleButton = ({ icon }) => {
  return (
    <button className="bg-red-400 rounded-full p-2">
      {icon}
    </button>
  );
};

export default CircleButton;
