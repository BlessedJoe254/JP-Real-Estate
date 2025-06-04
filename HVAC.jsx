import React from "react";
import { FaTemperatureHigh, FaFan, FaRegClock } from "react-icons/fa";

const HVAC = () => {
  return (
    <div className="p-6 text-white">
      <h1 className="text-3xl font-bold mb-6 text-orange-500">HVAC Control</h1>
      <p className="mb-8 text-gray-300">
        Monitor and control heating, ventilation, and air conditioning in your smart home.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Temperature Control */}
        <div className="card bg-gradient-to-br from-gray-800 to-gray-900 hover:scale-105 transform transition duration-300">
          <FaTemperatureHigh className="text-5xl text-orange-400 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Temperature</h2>
          <p className="text-gray-400 mb-4">Adjust and monitor room temperature settings.</p>
          <button className="btn-subsystem">Set Temperature</button>
        </div>

        {/* Fan Speed */}
        <div className="card bg-gradient-to-br from-gray-800 to-gray-900 hover:scale-105 transform transition duration-300">
          <FaFan className="text-5xl text-orange-400 mb-4 animate-spin-slow" />
          <h2 className="text-xl font-semibold mb-2">Fan Speed</h2>
          <p className="text-gray-400 mb-4">Control fan speed and air circulation.</p>
          <button className="btn-subsystem">Adjust Fan</button>
        </div>

        {/* HVAC Schedule */}
        <div className="card bg-gradient-to-br from-gray-800 to-gray-900 hover:scale-105 transform transition duration-300">
          <FaRegClock className="text-5xl text-orange-400 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Schedule</h2>
          <p className="text-gray-400 mb-4">Automate HVAC actions based on a schedule.</p>
          <button className="btn-subsystem">Set Schedule</button>
        </div>
      </div>
    </div>
  );
};

export default HVAC;
