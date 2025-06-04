import React from "react";
import { NavLink } from "react-router-dom";
import { FaCamera, FaBell, FaMicrochip, FaClipboardList } from "react-icons/fa";

const Security = () => {
  return (
    <div className="p-6 text-white">
      <h1 className="text-4xl font-bold mb-8 text-red-500">Security System</h1>
      <p className="text-gray-300 mb-10 max-w-xl">
        Monitor and manage your smart estate’s security from here. Access camera feeds, toggle alarms, and view sensor activity.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* View Camera Feeds */}
        <div className="card bg-gradient-to-br from-red-900 to-gray-900 hover:scale-105 transform transition duration-300">
          <FaCamera className="text-5xl text-red-400 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Camera Feeds</h2>
          <p className="text-gray-400 mb-4">Live camera access and playback.</p>
          <NavLink to="/camera-feeds" className="btn-subsystem">
            View Feeds
          </NavLink>
        </div>

        {/* Toggle Alarm */}
        <div className="card bg-gradient-to-br from-yellow-900 to-gray-900 hover:scale-105 transform transition duration-300">
          <FaBell className="text-5xl text-yellow-400 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Alarm Control</h2>
          <p className="text-gray-400 mb-4">Enable or disable your alarm system.</p>
          <NavLink to="/toggle-alarm" className="btn-subsystem">
            Toggle Alarm
          </NavLink>
        </div>

        {/* View Sensors */}
        <div className="card bg-gradient-to-br from-blue-900 to-gray-900 hover:scale-105 transform transition duration-300">
          <FaMicrochip className="text-5xl text-blue-400 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Sensors</h2>
          <p className="text-gray-400 mb-4">Check sensor statuses and alerts.</p>
          <NavLink to="/view-sensors" className="btn-subsystem">
            View Sensors
          </NavLink>
        </div>

        {/* View Logs */}
        <div className="card bg-gradient-to-br from-purple-900 to-gray-900 hover:scale-105 transform transition duration-300">
          <FaClipboardList className="text-5xl text-purple-400 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Security Logs</h2>
          <p className="text-gray-400 mb-4">Access historical security data.</p>
          <NavLink to="/security-logs" className="btn-subsystem">
            View Logs
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Security;
