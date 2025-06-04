import React from "react";
import { FaMicrochip } from "react-icons/fa";

const sensorData = [
  { name: "Front Door Motion Sensor", status: "Active", color: "green" },
  { name: "Backyard Sensor", status: "Inactive", color: "red" },
  { name: "Garage Intrusion Sensor", status: "Active", color: "green" },
  { name: "Window Glass Sensor", status: "Active", color: "green" },
];

const SensorsView = () => {
  return (
    <div className="text-white p-6">
      <h1 className="text-4xl font-bold mb-6 text-blue-400">Sensor Activity</h1>
      <p className="text-gray-300 mb-8 max-w-xl">
        Below is a real-time view of your smart security sensors and their current status.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {sensorData.map((sensor, idx) => (
          <div
            key={idx}
            className="bg-gradient-to-br from-blue-800 to-gray-900 p-6 rounded-lg shadow-md hover:scale-105 transform transition duration-300"
          >
            <div className="flex items-center mb-4">
              <FaMicrochip className="text-3xl text-blue-300 mr-4" />
              <h2 className="text-xl font-semibold">{sensor.name}</h2>
            </div>
            <p className={`text-${sensor.color}-400 font-bold`}>
              Status: {sensor.status}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SensorsView;
