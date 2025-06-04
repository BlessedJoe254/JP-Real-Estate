import React from "react";
import { FaFan, FaTemperatureHigh, FaThermometerHalf, FaSnowflake } from "react-icons/fa";

const HVAC = () => {
  return (
    <div className="p-6 text-white">
      <h1 className="text-3xl font-bold mb-6 text-orange-500">HVAC System</h1>
      <p className="mb-8 text-gray-300">
        Control your heating, ventilation, and air conditioning for optimal comfort and efficiency.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Fan Speed */}
        <div className="card bg-gradient-to-br from-purple-900 to-gray-900 hover:scale-105 transform transition duration-300 flex flex-col items-center">
          <FaFan className="text-6xl text-purple-400 mb-4 animate-spin-slow" />
          <h2 className="text-xl font-semibold mb-2">Fan Speed</h2>
          <p className="text-gray-400 mb-4 text-center">Adjust the speed of your HVAC fan.</p>
          <button className="btn-subsystem">Set Speed</button>
        </div>

        {/* Heating */}
        <div className="card bg-gradient-to-br from-red-900 to-gray-900 hover:scale-105 transform transition duration-300">
          <FaTemperatureHigh className="text-5xl text-red-400 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Heating</h2>
          <p className="text-gray-400 mb-4">Manage heating settings and schedules.</p>
          <button className="btn-subsystem">Control Heating</button>
        </div>

        {/* Temperature */}
        <div className="card bg-gradient-to-br from-yellow-900 to-gray-900 hover:scale-105 transform transition duration-300">
          <FaThermometerHalf className="text-5xl text-yellow-400 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Temperature</h2>
          <p className="text-gray-400 mb-4">Set desired temperature for your home.</p>
          <button className="btn-subsystem">Set Temperature</button>
        </div>

        {/* Cooling */}
        <div className="card bg-gradient-to-br from-blue-900 to-gray-900 hover:scale-105 transform transition duration-300">
          <FaSnowflake className="text-5xl text-blue-400 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Cooling</h2>
          <p className="text-gray-400 mb-4">Manage air conditioning settings and schedules.</p>
          <button className="btn-subsystem">Control Cooling</button>
        </div>
      </div>
    </div>
  );
};

export default HVAC;
