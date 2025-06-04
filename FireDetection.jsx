import React from "react";
import { FaFireExtinguisher, FaBell, FaHistory } from "react-icons/fa";

const FireDetection = () => {
  return (
    <div className="p-6 text-white">
      <h1 className="text-3xl font-bold mb-6 text-orange-500">Fire Detection System</h1>
      <p className="mb-8 text-gray-300">
        Monitor fire hazards with real-time smoke detection and alert systems across the property.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Smoke Detection */}
        <div className="card bg-gradient-to-br from-red-800 to-gray-900 hover:scale-105 transform transition duration-300">
          <FaFireExtinguisher className="text-5xl text-red-400 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Smoke Detectors</h2>
          <p className="text-gray-400 mb-4">View and manage all active smoke detectors in the estate.</p>
          <button className="btn-subsystem">Check Devices</button>
        </div>

        {/* Alerts */}
        <div className="card bg-gradient-to-br from-yellow-700 to-gray-900 hover:scale-105 transform transition duration-300">
          <FaBell className="text-5xl text-yellow-400 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Alerts</h2>
          <p className="text-gray-400 mb-4">Receive instant alerts during fire events or hazards.</p>
          <button className="btn-subsystem">View Alerts</button>
        </div>

        {/* Fire Logs */}
        <div className="card bg-gradient-to-br from-orange-900 to-gray-900 hover:scale-105 transform transition duration-300">
          <FaHistory className="text-5xl text-orange-400 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Event Logs</h2>
          <p className="text-gray-400 mb-4">Review fire-related incidents and past alert history.</p>
          <button className="btn-subsystem">See Logs</button>
        </div>
      </div>
    </div>
  );
};

export default FireDetection;
