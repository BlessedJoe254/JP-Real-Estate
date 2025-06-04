import React from "react";
import { FaBolt, FaBatteryFull, FaChartLine } from "react-icons/fa";

const Energy = () => {
  return (
    <div className="p-6 text-white">
      <h1 className="text-3xl font-bold mb-6 text-orange-500">Energy Monitoring</h1>
      <p className="mb-8 text-gray-300">
        Track and analyze your property's energy consumption and storage levels to reduce costs and optimize usage.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Energy Usage */}
        <div className="card bg-gradient-to-br from-yellow-800 to-gray-900 hover:scale-105 transition-transform">
          <FaBolt className="text-5xl text-yellow-400 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Real-Time Usage</h2>
          <p className="text-gray-400 mb-4">Monitor your current energy consumption across all systems.</p>
          <button className="btn-subsystem">View Usage</button>
        </div>

        {/* Battery Status */}
        <div className="card bg-gradient-to-br from-green-900 to-gray-900 hover:scale-105 transition-transform">
          <FaBatteryFull className="text-5xl text-green-400 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Battery Status</h2>
          <p className="text-gray-400 mb-4">Check battery charge levels and remaining backup capacity.</p>
          <button className="btn-subsystem">Check Batteries</button>
        </div>

        {/* Energy Trends */}
        <div className="card bg-gradient-to-br from-purple-900 to-gray-900 hover:scale-105 transition-transform">
          <FaChartLine className="text-5xl text-purple-400 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Energy Trends</h2>
          <p className="text-gray-400 mb-4">Analyze long-term energy usage and identify saving opportunities.</p>
          <button className="btn-subsystem">View Trends</button>
        </div>
      </div>
    </div>
  );
};

export default Energy;
