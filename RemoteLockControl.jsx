import React, { useState } from "react";
import { FaLock, FaLockOpen } from "react-icons/fa";

const LockControl = () => {
  const [isLocked, setIsLocked] = useState(true);

  const handleLock = () => {
    setIsLocked(true);
  };

  const handleUnlock = () => {
    setIsLocked(false);
  };

  return (
    <div className="text-white p-6">
      <h1 className="text-4xl font-bold mb-6 text-indigo-400">Remote Door Lock Control</h1>
      <p className="text-gray-300 mb-6 max-w-xl">
        Use the controls below to remotely lock or unlock your main entrance door.
      </p>

      <div className="card bg-gradient-to-br from-indigo-800 to-gray-900 text-center max-w-md mx-auto p-8">
        {isLocked ? (
          <FaLock className="text-6xl text-red-500 mb-4 mx-auto" />
        ) : (
          <FaLockOpen className="text-6xl text-green-400 mb-4 mx-auto" />
        )}

        <h2 className="text-xl font-semibold mb-2">
          Door is currently {isLocked ? "Locked" : "Unlocked"}
        </h2>

        <div className="flex justify-center gap-6 mt-6">
          <button
            onClick={handleLock}
            className={`btn-subsystem px-6 py-2 rounded ${
              isLocked ? "bg-gray-600 cursor-not-allowed" : "bg-red-600 hover:bg-red-700"
            }`}
            disabled={isLocked}
          >
            Lock
          </button>

          <button
            onClick={handleUnlock}
            className={`btn-subsystem px-6 py-2 rounded ${
              !isLocked ? "bg-gray-600 cursor-not-allowed" : "bg-green-600 hover:bg-green-700"
            }`}
            disabled={!isLocked}
          >
            Unlock
          </button>
        </div>
      </div>
    </div>
  );
};

export default LockControl;
