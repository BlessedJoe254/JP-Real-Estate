import React from "react";
import { FaVideo } from "react-icons/fa";

const CameraFeeds = () => {
  return (
    <div className="text-white p-6">
      <h1 className="text-4xl font-bold mb-6 text-red-400">Live Camera Feeds</h1>
      <p className="text-gray-300 mb-6 max-w-xl">
        Monitor live footage from all surveillance cameras installed around the estate.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="card bg-gradient-to-br from-gray-800 to-black hover:scale-105 transition">
          <FaVideo className="text-5xl text-red-400 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Main Gate Camera</h2>
          <p className="text-gray-400">Live feed from the entrance gate.</p>
        </div>

        <div className="card bg-gradient-to-br from-gray-800 to-black hover:scale-105 transition">
          <FaVideo className="text-5xl text-yellow-400 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Backyard Camera</h2>
          <p className="text-gray-400">Live feed from the backyard zone.</p>
        </div>

        <div className="card bg-gradient-to-br from-gray-800 to-black hover:scale-105 transition">
          <FaVideo className="text-5xl text-cyan-400 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Poultry House Camera</h2>
          <p className="text-gray-400">Surveillance inside the poultry area.</p>
        </div>
      </div>
    </div>
  );
};

export default CameraFeeds;
