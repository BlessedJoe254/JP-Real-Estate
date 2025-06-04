import React from "react";

const CameraFeeds = () => {
  return (
    <div className="p-6 text-white">
      <h1 className="text-4xl font-bold mb-6 text-red-500">Camera Feeds</h1>
      <p className="text-gray-300 mb-8">
        Live security camera feeds from around your property.
      </p>

      {/* Placeholder feeds - replace with real camera integration */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-800 rounded shadow p-4 flex items-center justify-center h-64 text-gray-500">
          Camera 1 Feed Placeholder
        </div>
        <div className="bg-gray-800 rounded shadow p-4 flex items-center justify-center h-64 text-gray-500">
          Camera 2 Feed Placeholder
        </div>
        <div className="bg-gray-800 rounded shadow p-4 flex items-center justify-center h-64 text-gray-500">
          Camera 3 Feed Placeholder
        </div>
        <div className="bg-gray-800 rounded shadow p-4 flex items-center justify-center h-64 text-gray-500">
          Camera 4 Feed Placeholder
        </div>
      </div>
    </div>
  );
};

export default CameraFeeds;
