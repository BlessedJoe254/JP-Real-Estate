import React, { useState } from "react";

const ToggleAlarm = () => {
  const [isArmed, setIsArmed] = useState(false);

  const toggleAlarm = () => {
    setIsArmed((prev) => !prev);
  };

  return (
    <div className="p-6 text-white">
      <h1 className="text-4xl font-bold mb-6 text-red-500">Toggle Alarm</h1>
      <p className="text-gray-300 mb-8">
        Arm or disarm your home alarm system.
      </p>

      <div
        className={`p-8 rounded shadow text-center cursor-pointer select-none ${
          isArmed ? "bg-red-700" : "bg-green-700"
        } hover:opacity-90 transition`}
        onClick={toggleAlarm}
      >
        <h2 className="text-3xl font-semibold mb-4">
          Alarm is currently {isArmed ? "Armed" : "Disarmed"}
        </h2>
        <button
          className={`px-6 py-3 rounded text-white font-semibold ${
            isArmed ? "bg-red-900 hover:bg-red-800" : "bg-green-900 hover:bg-green-800"
          } transition`}
        >
          {isArmed ? "Disarm Alarm" : "Arm Alarm"}
        </button>
      </div>
    </div>
  );
};

export default ToggleAlarm;
