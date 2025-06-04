import React from "react";
import { FaWindowMaximize, FaArrowUp, FaArrowDown } from "react-icons/fa";

const Blinds = () => {
  return (
    <div className="p-6 text-white">
      <h1 className="text-3xl font-bold mb-6 text-orange-500">Blinds Control</h1>
      <p className="mb-8 text-gray-300">
        Adjust your window blinds to control lighting and privacy across your smart estate.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Open Blinds */}
        <div className="card bg-gradient-to-br from-green-800 to-gray-900 hover:scale-105 transition-transform">
          <FaArrowUp className="text-5xl text-green-400 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Open Blinds</h2>
          <p className="text-gray-400 mb-4">Let in natural light by raising your smart blinds.</p>
          <button className="btn-subsystem">Open Now</button>
        </div>

        {/* Close Blinds */}
        <div className="card bg-gradient-to-br from-blue-900 to-gray-900 hover:scale-105 transition-transform">
          <FaArrowDown className="text-5xl text-blue-400 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Close Blinds</h2>
          <p className="text-gray-400 mb-4">Increase privacy or block sunlight by closing blinds.</p>
          <button className="btn-subsystem">Close Now</button>
        </div>

        {/* Blinds Status */}
        <div className="card bg-gradient-to-br from-indigo-900 to-gray-900 hover:scale-105 transition-transform">
          <FaWindowMaximize className="text-5xl text-indigo-400 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Blinds Status</h2>
          <p className="text-gray-400 mb-4">Monitor the current position of all connected blinds.</p>
          <button className="btn-subsystem">View Status</button>
        </div>
      </div>
    </div>
  );
};

export default Blinds;
