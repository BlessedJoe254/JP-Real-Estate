import React from "react";
import { FaWater, FaClock, FaMapMarkedAlt } from "react-icons/fa";

const Irrigation = () => {
  return (
    <div className="p-6 text-white">
      <h1 className="text-3xl font-bold mb-6 text-orange-500">Irrigation System</h1>
      <p className="mb-8 text-gray-300">
        Automatically manage water flow for your garden, lawn, and crops using intelligent scheduling.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Water Flow */}
        <div className="card bg-gradient-to-br from-blue-900 to-gray-900 hover:scale-105 transform transition duration-300 flex flex-col items-center">
          <FaWater className="text-5xl text-blue-400 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Water Flow</h2>
          <p className="text-gray-400 mb-4 text-center">Start or stop water flow across your zones.</p>
          <button className="btn-subsystem">Control Flow</button>
        </div>

        {/* Schedule */}
        <div className="card bg-gradient-to-br from-green-900 to-gray-900 hover:scale-105 transform transition duration-300 flex flex-col items-center">
          <FaClock className="text-5xl text-green-400 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Scheduling</h2>
          <p className="text-gray-400 mb-4 text-center">Define irrigation times for optimal watering.</p>
          <button className="btn-subsystem">Set Schedule</button>
        </div>

        {/* Zone Control */}
        <div className="card bg-gradient-to-br from-teal-800 to-gray-900 hover:scale-105 transform transition duration-300 flex flex-col items-center">
          <FaMapMarkedAlt className="text-5xl text-teal-300 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Zone Control</h2>
          <p className="text-gray-400 mb-4 text-center">Manage and monitor irrigation by area.</p>
          <button className="btn-subsystem">View Zones</button>
        </div>
      </div>
    </div>
  );
};

export default Irrigation;
