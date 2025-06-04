import React from "react";
import { FaUsersCog } from "react-icons/fa";

const ManageLockUsers = () => {
  return (
    <div className="text-white p-6">
      <h1 className="text-4xl font-bold mb-6 text-pink-400">Manage Lock Users</h1>
      <p className="text-gray-300 mb-6 max-w-xl">
        Add, remove, or change permissions for users who have access to smart locks.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="card bg-gradient-to-br from-pink-800 to-gray-900">
          <FaUsersCog className="text-5xl text-pink-400 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Joe (Admin)</h2>
          <p className="text-gray-400 mb-2">Full Access</p>
          <button className="btn-subsystem">Edit Permissions</button>
        </div>

        <div className="card bg-gradient-to-br from-pink-700 to-gray-900">
          <FaUsersCog className="text-5xl text-pink-300 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Grace (Guest)</h2>
          <p className="text-gray-400 mb-2">Limited Access</p>
          <button className="btn-subsystem">Revoke Access</button>
        </div>
      </div>
    </div>
  );
};

export default ManageLockUsers;
