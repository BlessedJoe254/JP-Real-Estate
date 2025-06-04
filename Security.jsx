import React from "react";
import { FaCamera, FaBell, FaRunning, FaClipboardList } from "react-icons/fa";

const Security = () => {
  return (
    <div className="p-6 text-white">
      <h1 className="text-3xl font-bold mb-6 text-orange-500">Security System</h1>
      <p className="mb-8 text-gray-300">
        Monitor and control all security devices in your property. Stay informed with real-time alerts and status updates.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Cameras */}
        <div className="card bg-gradient-to-br from-purple-900 to-gray-900 hover:scale-105 transform transition duration-300">
          <FaCamera className="text-5xl text-purple-400 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Cameras</h2>
          <p className="text-gray-400 mb-4">View live feeds from all your security cameras.</p>
          <button className="btn-subsystem">View Camera Feeds</button>
        </div>

        {/* Alarm System */}
        <div className="card bg-gradient-to-br from-red-900 to-gray-900 hover:scale-105 transform transition duration-300">
          <FaBell className="text-5xl text-red-400 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Alarm System</h2>
          <p className="text-gray-400 mb-4">Arm or disarm your property’s alarm system.</p>
          <button className="btn-subsystem">Toggle Alarm</button>
        </div>

        {/* Motion Sensors */}
        <div className="card bg-gradient-to-br from-yellow-900 to-gray-900 hover:scale-105 transform transition duration-300">
          <FaRunning className="text-5xl text-yellow-400 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Motion Sensors</h2>
          <p className="text-gray-400 mb-4">Check the status of all motion sensors.</p>
          <button className="btn-subsystem">View Sensors</button>
        </div>

        {/* Security Logs */}
        <div className="card bg-gradient-to-br from-blue-900 to-gray-900 hover:scale-105 transform transition duration-300">
          <FaClipboardList className="text-5xl text-blue-400 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Security Logs</h2>
          <p className="text-gray-400 mb-4">Review recent security events and alerts.</p>
          <button className="btn-subsystem">View Logs</button>
        </div>
      </div>
    </div>
  );
};

export default Security;
