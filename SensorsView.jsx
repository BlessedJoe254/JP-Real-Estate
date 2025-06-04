import React from "react";

const SensorsView = () => {
  // Example sensors data (replace with real data)
  const sensors = [
    { id: 1, name: "Front Door Sensor", status: "Active" },
    { id: 2, name: "Back Door Sensor", status: "Inactive" },
    { id: 3, name: "Living Room Motion Sensor", status: "Active" },
    { id: 4, name: "Garage Sensor", status: "Active" },
  ];

  return (
    <div className="p-6 text-white">
      <h1 className="text-4xl font-bold mb-6 text-red-500">Security Sensors</h1>
      <p className="text-gray-300 mb-8">
        Current status of your home security sensors.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {sensors.map((sensor) => (
          <div
            key={sensor.id}
            className={`p-6 rounded shadow ${
              sensor.status === "Active" ? "bg-green-700" : "bg-gray-700"
            }`}
          >
            <h2 className="text-2xl font-semibold">{sensor.name}</h2>
            <p className="mt-2 text-lg">
              Status:{" "}
              <span
                className={`font-bold ${
                  sensor.status === "Active" ? "text-green-300" : "text-gray-400"
                }`}
              >
                {sensor.status}
              </span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SensorsView;
