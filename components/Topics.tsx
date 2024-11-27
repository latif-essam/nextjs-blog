import React from "react";

const Topics: React.FC<{ topics: string[] }> = ({ topics }) => {
  return (
    <div className="w-full lg:w-1/4  p-4 rounded-lg shadow-lg h-fit mt-12 lg:mt-16 order-1 lg:order-2 bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg border border-gray-200 ">
      <h2 className="text-2xl font-bold mb-4">Topics</h2>
      <ul className="space-y-2">
        {topics.map((topic, index) => (
          <li
            key={index}
            className="text-blue-600 hover:text-blue-800 cursor-pointer"
          >
            {topic}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Topics;
