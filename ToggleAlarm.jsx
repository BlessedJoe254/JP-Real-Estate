import React, { useState } from "react";
import { FaBell } from "react-icons/fa";

const ToggleAlarm = () => {
  const [alarmOn, setAlarmOn] = useState(true);

  const handleToggle = () => {
    setAlarmOn((prev) => !prev);
  };

  return (
    <div className="text-white p-6">
      <h1 className="text-4xl font-bold mb-6 text-yellow-400">Alarm Control</h1>
      <p className="text-gray-300 mb-8 max-w-xl">
        Use the switch below to enable or disable your estate’s security alarm.
      </p>

      <div className="bg-gradient-to-br from-yellow-800 to-gray-900 p-8 rounded-lg shadow-lg w-full max-w-md">
        <div className="flex items-center mb-6">
          <FaBell className="text-5xl text-yellow-300 mr-4" />
          <h2 className="text-2xl font-semibold">
            Alarm is currently <span className={alarmOn ? "text-green-400" : "text-red-400"}>{alarmOn ? "ON" : "OFF"}</span>
          </h2>
        </div>
        <button
          onClick={handleToggle}
          className={`px-6 py-3 rounded-md font-semibold text-white transition ${
            alarmOn
              ? "bg-red-600 hover:bg-red-700"
              : "bg-green-600 hover:bg-green-700"
          }`}
        >
          {alarmOn ? "Turn Off Alarm" : "Turn On Alarm"}
        </button>
      </div>
    </div>
  );
};

export default ToggleAlarm;
