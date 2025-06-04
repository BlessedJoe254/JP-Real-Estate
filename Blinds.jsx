import React from "react";
import { FaWindowMaximize, FaSun, FaMoon } from "react-icons/fa";

const Blinds = () => {
  return (
    <div className="p-6 text-white">
      <h1 className="text-3xl font-bold mb-6 text-orange-500">Smart Blinds System</h1>
      <p className="mb-8 text-gray-300">
        Control the blinds automatically to adjust natural light and privacy levels throughout your home.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Open/Close Blinds */}
        <div className="card bg-gradient-to-br from-indigo-900 to-gray-900 hover:scale-105 transform transition duration-300 flex flex-col items-center">
          <FaWindowMaximize className="text-5xl text-indigo-400 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Open/Close Blinds</h2>
          <p className="text-gray-400 mb-4 text-center">Manually or automatically adjust blinds to your preference.</p>
          <button className="btn-subsystem">Control Blinds</button>
        </div>

        {/* Light Adjustment */}
        <div className="card bg-gradient-to-br from-yellow-900 to-gray-900 hover:scale-105 transform transition duration-300 flex flex-col items-center">
          <FaSun className="text-5xl text-yellow-400 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Daylight Mode</h2>
          <p className="text-gray-400 mb-4 text-center">Maximize natural light during daytime hours.</p>
          <button className="btn-subsystem">Activate Day Mode</button>
        </div>

        {/* Privacy Mode */}
        <div className="card bg-gradient-to-br from-purple-900 to-gray-900 hover:scale-105 transform transition duration-300 flex flex-col items-center">
          <FaMoon className="text-5xl text-purple-400 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Privacy Mode</h2>
          <p className="text-gray-400 mb-4 text-center">Ensure privacy by closing blinds at night or on demand.</p>
          <button className="btn-subsystem">Activate Privacy</button>
        </div>
      </div>
    </div>
  );
};

export default Blinds;
