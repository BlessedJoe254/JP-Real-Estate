import React from "react";
import { FaLock } from "react-icons/fa";

const LockStatus = () => {
  return (
    <div className="text-white p-6">
      <h1 className="text-4xl font-bold mb-6 text-purple-400">Lock Status</h1>
      <p className="text-gray-300 mb-6 max-w-xl">
        Monitor the current state of all smart locks installed across your estate.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="card bg-gradient-to-br from-purple-800 to-gray-900">
          <FaLock className="text-5xl text-purple-400 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Main Entrance</h2>
          <p className="text-gray-400">Status: <span className="text-green-400">Locked</span></p>
        </div>

        <div className="card bg-gradient-to-br from-purple-700 to-gray-900">
          <FaLock className="text-5xl text-purple-300 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Back Door</h2>
          <p className="text-gray-400">Status: <span className="text-red-400">Unlocked</span></p>
        </div>

        <div className="card bg-gradient-to-br from-purple-600 to-gray-900">
          <FaLock className="text-5xl text-indigo-400 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Garage Lock</h2>
          <p className="text-gray-400">Status: <span className="text-green-400">Locked</span></p>
        </div>
      </div>
    </div>
  );
};

export default LockStatus;
