import React from "react";
import { FaBell, FaVolumeUp, FaMicrophone } from "react-icons/fa";

const Doorbell = () => {
  return (
    <div className="p-6 text-white">
      <h1 className="text-3xl font-bold mb-6 text-orange-500">Doorbell System</h1>
      <p className="mb-8 text-gray-300">
        Monitor your smart doorbell with live alerts, two-way communication, and activity logs.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Ring Alerts */}
        <div className="card bg-gradient-to-br from-yellow-900 to-gray-900 hover:scale-105 transform transition duration-300">
          <FaBell className="text-5xl text-yellow-400 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Ring Alerts</h2>
          <p className="text-gray-400 mb-4">Enable or disable real-time alerts when someone rings the doorbell.</p>
          <button className="btn-subsystem">Toggle Alerts</button>
        </div>

        {/* Two-way Audio */}
        <div className="card bg-gradient-to-br from-purple-900 to-gray-900 hover:scale-105 transform transition duration-300">
          <FaMicrophone className="text-5xl text-purple-400 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Two-way Audio</h2>
          <p className="text-gray-400 mb-4">Communicate directly with visitors through your doorbell's speaker and microphone.</p>
          <button className="btn-subsystem">Start Talk</button>
        </div>

        {/* Volume Control */}
        <div className="card bg-gradient-to-br from-red-900 to-gray-900 hover:scale-105 transform transition duration-300">
          <FaVolumeUp className="text-5xl text-red-400 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Volume Control</h2>
          <p className="text-gray-400 mb-4">Adjust the volume of the doorbell chime and audio communication.</p>
          <button className="btn-subsystem">Adjust Volume</button>
        </div>
      </div>
    </div>
  );
};

export default Doorbell;
