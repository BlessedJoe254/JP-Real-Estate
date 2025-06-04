import React from "react";
import { NavLink } from "react-router-dom";
import { FaVideo, FaBell, FaThermometerHalf, FaClipboardList } from "react-icons/fa";

const Security = () => {
  return (
    <div className="p-6 text-white">
      <h1 className="text-4xl font-bold mb-8 text-red-500">Security System</h1>
      <p className="text-gray-300 mb-10 max-w-xl">
        Manage and monitor your home security systems from here.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* View Camera Feeds */}
        <NavLink
          to="/security/camera-feeds"
          className="card bg-gradient-to-br from-red-700 to-gray-900 hover:scale-105 transform transition duration-300 flex flex-col items-center p-8"
        >
          <FaVideo className="text-6xl mb-4 text-red-400" />
          <h2 className="text-2xl font-semibold">View Camera Feeds</h2>
          <p className="text-gray-400 mt-2 text-center">Live feed from your security cameras.</p>
        </NavLink>

        {/* Toggle Alarm */}
        <NavLink
          to="/security/toggle-alarm"
          className="card bg-gradient-to-br from-red-600 to-gray-900 hover:scale-105 transform transition duration-300 flex flex-col items-center p-8"
        >
          <FaBell className="text-6xl mb-4 text-red-400" />
          <h2 className="text-2xl font-semibold">Toggle Alarm</h2>
          <p className="text-gray-400 mt-2 text-center">Arm or disarm your home alarm system.</p>
        </NavLink>

        {/* View Sensors */}
        <NavLink
          to="/security/sensors"
          className="card bg-gradient-to-br from-red-500 to-gray-900 hover:scale-105 transform transition duration-300 flex flex-col items-center p-8"
        >
          <FaThermometerHalf className="text-6xl mb-4 text-red-400" />
          <h2 className="text-2xl font-semibold">View Sensors</h2>
          <p className="text-gray-400 mt-2 text-center">Monitor status of all security sensors.</p>
        </NavLink>

        {/* View Logs */}
        <NavLink
          to="/security-logs"
          className="card bg-gradient-to-br from-red-400 to-gray-900 hover:scale-105 transform transition duration-300 flex flex-col items-center p-8"
        >
          <FaClipboardList className="text-6xl mb-4 text-red-400" />
          <h2 className="text-2xl font-semibold">View Logs</h2>
          <p className="text-gray-400 mt-2 text-center">Review recent security alerts and logs.</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Security;
