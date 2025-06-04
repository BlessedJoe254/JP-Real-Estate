import React from "react";
import { FaLock, FaUnlock, FaKey } from "react-icons/fa";

const DoorLock = () => {
  return (
    <div className="p-6 text-white">
      <h1 className="text-3xl font-bold mb-6 text-orange-500">Smart Door Lock</h1>
      <p className="mb-8 text-gray-300">
        Manage and monitor your property's smart door locks remotely and securely.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Lock Status */}
        <div className="card bg-gradient-to-br from-gray-800 to-gray-900 hover:scale-105 transform transition duration-300">
          <FaLock className="text-5xl text-orange-400 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Lock Status</h2>
          <p className="text-gray-400 mb-4">Check if your doors are locked or unlocked.</p>
          <button className="btn-subsystem">Check Status</button>
        </div>

        {/* Lock / Unlock */}
        <div className="card bg-gradient-to-br from-gray-800 to-gray-900 hover:scale-105 transform transition duration-300">
          <FaUnlock className="text-5xl text-orange-400 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Control Lock</h2>
          <p className="text-gray-400 mb-4">Remotely lock or unlock your doors.</p>
          <button className="btn-subsystem">Toggle Lock</button>
        </div>

        {/* Access Logs */}
        <div className="card bg-gradient-to-br from-gray-800 to-gray-900 hover:scale-105 transform transition duration-300">
          <FaKey className="text-5xl text-orange-400 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Access Logs</h2>
          <p className="text-gray-400 mb-4">Review who accessed your doors and when.</p>
          <button className="btn-subsystem">View Logs</button>
        </div>
      </div>
    </div>
  );
};

export default DoorLock;
