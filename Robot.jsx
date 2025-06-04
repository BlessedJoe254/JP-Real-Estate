import React from "react";
import { FaRobot, FaMicrophone, FaCogs } from "react-icons/fa";

const RobotAssistant = () => {
  return (
    <div className="p-6 text-white">
      <h1 className="text-3xl font-bold mb-6 text-orange-500">Robot Assistant</h1>
      <p className="mb-8 text-gray-300">
        Your smart helper for managing home automation, answering queries, and controlling subsystems.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Voice Control */}
        <div className="card bg-gradient-to-br from-purple-900 to-gray-900 hover:scale-105 transform transition duration-300">
          <FaMicrophone className="text-5xl text-purple-400 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Voice Control</h2>
          <p className="text-gray-400 mb-4">Interact hands-free with your home using voice commands.</p>
          <button className="btn-subsystem">Activate Voice</button>
        </div>

        {/* Automation */}
        <div className="card bg-gradient-to-br from-indigo-900 to-gray-900 hover:scale-105 transform transition duration-300">
          <FaCogs className="text-5xl text-indigo-400 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Automation</h2>
          <p className="text-gray-400 mb-4">Configure automated routines and responses for your home.</p>
          <button className="btn-subsystem">Manage Automation</button>
        </div>

        {/* Assistance */}
        <div className="card bg-gradient-to-br from-pink-900 to-gray-900 hover:scale-105 transform transition duration-300">
          <FaRobot className="text-5xl text-pink-400 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Assistance</h2>
          <p className="text-gray-400 mb-4">Get real-time support and status updates from your assistant.</p>
          <button className="btn-subsystem">Request Help</button>
        </div>
      </div>
    </div>
  );
};

export default RobotAssistant;
