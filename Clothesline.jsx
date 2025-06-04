import React from "react";
import { FaTshirt, FaWind, FaCloudSun } from "react-icons/fa";

const Clothesline = () => {
  return (
    <div className="p-6 text-white">
      <h1 className="text-3xl font-bold mb-6 text-orange-500">Clothesline System</h1>
      <p className="mb-8 text-gray-300">
        Automate your clothes drying with smart controls for wind, sun, and drying cycles.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Drying Control */}
        <div className="card bg-gradient-to-br from-blue-900 to-gray-900 hover:scale-105 transform transition duration-300">
          <FaTshirt className="text-5xl text-blue-400 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Drying Control</h2>
          <p className="text-gray-400 mb-4">Start or pause drying cycles automatically.</p>
          <button className="btn-subsystem">Control Drying</button>
        </div>

        {/* Wind Sensor */}
        <div className="card bg-gradient-to-br from-teal-800 to-gray-900 hover:scale-105 transform transition duration-300">
          <FaWind className="text-5xl text-teal-300 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Wind Sensor</h2>
          <p className="text-gray-400 mb-4">Detect wind speed to protect your clothesline.</p>
          <button className="btn-subsystem">View Wind Data</button>
        </div>

        {/* Weather Monitoring */}
        <div className="card bg-gradient-to-br from-yellow-900 to-gray-900 hover:scale-105 transform transition duration-300">
          <FaCloudSun className="text-5xl text-yellow-400 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Weather Monitoring</h2>
          <p className="text-gray-400 mb-4">Adjust drying schedules based on sunlight and rain.</p>
          <button className="btn-subsystem">Check Weather</button>
        </div>
      </div>
    </div>
  );
};

export default Clothesline;
