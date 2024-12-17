import React from 'react';
import girl from '../assets/girlBalloon.png';
import boy from '../assets/boyBalloon.png';

export default function Welcome() {
  return (
    <div className="bg-purple-100 rounded-lg shadow-md p-6 flex justify-between items-center space-x-40">
      {/* Text Section */}
      <div>
        <h1 className="text-2xl font-bold text-purple-900">Hello Palak👋</h1>
        <p className="text-sm text-purple-700">You can manage your things from here</p>
      </div>

      {/* Images Section */}
      <div className="flex items-center space-x-4">
        {/* Girl Image */}
        <img
          src={girl}
          alt="Girl holding a balloon"
          className="w-20 h-20 object-contain"
        />
        {/* Welcome Text */}
        <span className="text-purple-900 text-6xl font-extrabold font-serif">
          Welcome
        </span>
        {/* Boy Image */}
        <img
          src={boy}
          alt="Boy holding a balloon"
          className="w-20 h-20 object-contain"
        />
      </div>
    </div>
  );
}
