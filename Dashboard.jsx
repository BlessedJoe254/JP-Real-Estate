import React from "react";
import { FaHome, FaShieldAlt, FaBolt, FaTint } from "react-icons/fa";

const Dashboard = () => {
  return (
    <div className="p-6 text-white">
      <h1 className="text-4xl font-bold mb-8 text-orange-500">Dashboard</h1>
      <p className="text-gray-300 mb-10 max-w-xl">
        Welcome to your Smart Real Estate Control System dashboard. Get quick insights into your home’s key systems below.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Home Status */}
        <div className="card bg-gradient-to-br from-indigo-900 to-gray-900 hover:scale-105 transform transition duration-300">
          <FaHome className="text-5xl text-indigo-400 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Home Status</h2>
          <p className="text-gray-400 mb-4">All systems are running smoothly.</p>
          <button className="btn-subsystem">View Details</button>
        </div>

        {/* Security Alerts */}
        <div className="card bg-gradient-to-br from-red-900 to-gray-900 hover:scale-105 transform transition duration-300">
          <FaShieldAlt className="text-5xl text-red-400 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Security Alerts</h2>
          <p className="text-gray-400 mb-4">No recent alerts.</p>
          <button className="btn-subsystem">View Logs</button>
        </div>

        {/* Energy Usage */}
        <div className="card bg-gradient-to-br from-yellow-900 to-gray-900 hover:scale-105 transform transition duration-300">
          <FaBolt className="text-5xl text-yellow-400 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Energy Usage</h2>
          <p className="text-gray-400 mb-4">Current usage is 450 kWh.</p>
          <button className="btn-subsystem">View Stats</button>
        </div>

        {/* Water Consumption */}
        <div className="card bg-gradient-to-br from-blue-900 to-gray-900 hover:scale-105 transform transition duration-300">
          <FaTint className="text-5xl text-blue-400 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Water Consumption</h2>
          <p className="text-gray-400 mb-4">You used 1200 liters this week.</p>
          <button className="btn-subsystem">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
