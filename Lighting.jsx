import React from "react";
import { FaLightbulb, FaClock, FaPalette } from "react-icons/fa";

const Lighting = () => {
  return (
    <div className="p-6 text-white">
      <h1 className="text-3xl font-bold mb-6 text-orange-500">Lighting Control</h1>
      <p className="mb-8 text-gray-300">
        Manage lighting across your smart home rooms. Automate brightness, color, and scheduling.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Brightness */}
        <div className="card bg-gradient-to-br from-gray-800 to-gray-900 hover:scale-105 transform transition duration-300">
          <FaLightbulb className="text-5xl text-yellow-400 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Brightness</h2>
          <p className="text-gray-400 mb-4">Adjust light brightness room by room.</p>
          <button className="btn-subsystem">Adjust Brightness</button>
        </div>

        {/* Color */}
        <div className="card bg-gradient-to-br from-gray-800 to-gray-900 hover:scale-105 transform transition duration-300">
          <FaPalette className="text-5xl text-pink-400 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Color</h2>
          <p className="text-gray-400 mb-4">Set lighting color for ambiance.</p>
          <button className="btn-subsystem">Choose Color</button>
        </div>

        {/* Schedule */}
        <div className="card bg-gradient-to-br from-gray-800 to-gray-900 hover:scale-105 transform transition duration-300">
          <FaClock className="text-5xl text-green-400 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Schedule</h2>
          <p className="text-gray-400 mb-4">Turn lights on/off at scheduled times.</p>
          <button className="btn-subsystem">Set Schedule</button>
        </div>
      </div>
    </div>
  );
};

export default Lighting;
