import React from "react";
import { FaLock, FaUnlockAlt, FaKey, FaUserShield } from "react-icons/fa";

const DoorLock = () => {
  return (
    <div className="p-6 text-white">
      <h1 className="text-3xl font-bold mb-6 text-orange-500">Door Lock System</h1>
      <p className="mb-8 text-gray-300">
        Secure and control your doors remotely with easy access management and monitoring.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Lock Status */}
        <div className="card bg-gradient-to-br from-indigo-900 to-gray-900 hover:scale-105 transform transition duration-300">
          <FaLock className="text-5xl text-indigo-400 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Lock Status</h2>
          <p className="text-gray-400 mb-4">Check the current status of all door locks.</p>
          <button className="btn-subsystem">View Status</button>
        </div>

        {/* Unlock Doors */}
        <div className="card bg-gradient-to-br from-green-900 to-gray-900 hover:scale-105 transform transition duration-300">
          <FaUnlockAlt className="text-5xl text-green-400 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Unlock Doors</h2>
          <p className="text-gray-400 mb-4">Unlock doors remotely for guests or deliveries.</p>
          <button className="btn-subsystem">Unlock Now</button>
        </div>

        {/* Access Keys */}
        <div className="card bg-gradient-to-br from-yellow-900 to-gray-900 hover:scale-105 transform transition duration-300">
          <FaKey className="text-5xl text-yellow-400 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Access Keys</h2>
          <p className="text-gray-400 mb-4">Manage digital keys and access permissions.</p>
          <button className="btn-subsystem">Manage Keys</button>
        </div>

        {/* User Access Logs */}
        <div className="card bg-gradient-to-br from-red-900 to-gray-900 hover:scale-105 transform transition duration-300">
          <FaUserShield className="text-5xl text-red-400 mb-4" />
          <h2 className="text-xl font-semibold mb-2">User Access Logs</h2>
          <p className="text-gray-400 mb-4">Review recent door access activities.</p>
          <button className="btn-subsystem">View Logs</button>
        </div>
      </div>
    </div>
  );
};

export default DoorLock;
