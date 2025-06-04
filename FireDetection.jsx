import React from "react";
import { FaFire, FaBell, FaThermometerHalf } from "react-icons/fa";

const FireDetection = () => {
  return (
    <div className="p-6 text-white">
      <h1 className="text-3xl font-bold mb-6 text-orange-500">Fire Detection System</h1>
      <p className="mb-8 text-gray-300">
        Monitor your property for fire hazards with real-time alerts and temperature sensors.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Fire Sensors */}
        <div className="card bg-gradient-to-br from-red-900 to-gray-900 hover:scale-105 transform transition duration-300 flex flex-col items-center">
          <FaFire className="text-5xl text-red-500 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Fire Sensors</h2>
          <p className="text-gray-400 mb-4 text-center">Detect smoke and flames instantly across all zones.</p>
          <button className="btn-subsystem">View Sensors</button>
        </div>

        {/* Alerts */}
        <div className="card bg-gradient-to-br from-yellow-900 to-gray-900 hover:scale-105 transform transition duration-300 flex flex-col items-center">
          <FaBell className="text-5xl text-yellow-400 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Alerts</h2>
          <p className="text-gray-400 mb-4 text-center">Receive instant notifications and alarm triggers.</p>
          <button className="btn-subsystem">Manage Alerts</button>
        </div>

        {/* Temperature Monitoring */}
        <div className="card bg-gradient-to-br from-orange-800 to-gray-900 hover:scale-105 transform transition duration-300 flex flex-col items-center">
          <FaThermometerHalf className="text-5xl text-orange-400 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Temperature Monitoring</h2>
          <p className="text-gray-400 mb-4 text-center">Keep track of heat levels to prevent fire outbreaks.</p>
          <button className="btn-subsystem">View Temperature</button>
        </div>
      </div>
    </div>
  );
};

export default FireDetection;
