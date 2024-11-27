import React from "react";

const PlaceholderCard: React.FC = () => {
  return (
    <div className="max-w-[100%] flex flex-col justify-between bg-gray-200 bg-opacity-50 backdrop-filter backdrop-blur-lg border border-gray-300 rounded-lg shadow-lg animate-pulse">
      <div className="p-4">
        <div className="h-6 bg-gray-400 rounded mb-2"></div>
        <div className="h-4 bg-gray-400 rounded mb-4"></div>
        <div className="h-4 bg-gray-400 rounded"></div>
      </div>
      <div className="p-4 flex justify-between items-center">
        <div className="h-4 bg-gray-400 rounded w-20"></div>
        <div className="h-4 bg-gray-400 rounded w-16"></div>
      </div>
    </div>
  );
};

export default PlaceholderCard;
