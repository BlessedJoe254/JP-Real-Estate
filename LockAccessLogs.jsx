import React from "react";
import { FaHistory } from "react-icons/fa";

const LockAccessLogs = () => {
  return (
    <div className="text-white p-6">
      <h1 className="text-4xl font-bold mb-6 text-orange-400">Lock Access Logs</h1>
      <p className="text-gray-300 mb-6 max-w-xl">
        Below is a log of all lock and unlock activities from the past week.
      </p>

      <div className="bg-gray-800 p-4 rounded-lg shadow-lg max-w-3xl">
        <ul className="divide-y divide-gray-700">
          <li className="py-2 flex justify-between">
            <span>Admin unlocked Main Entrance</span>
            <span className="text-gray-400 text-sm">June 3, 10:45 AM</span>
          </li>
          <li className="py-2 flex justify-between">
            <span>Auto-lock activated on Garage</span>
            <span className="text-gray-400 text-sm">June 2, 8:00 PM</span>
          </li>
          <li className="py-2 flex justify-between">
            <span>Guest access granted to Back Door</span>
            <span className="text-gray-400 text-sm">June 2, 2:30 PM</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LockAccessLogs;
