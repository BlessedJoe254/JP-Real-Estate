import React from 'react';
import { FaCamera, FaDoorOpen, FaExclamationTriangle } from 'react-icons/fa';

const logs = [
  { time: '08:42 AM', event: 'Motion detected at front gate', icon: <FaCamera className="text-yellow-400" /> },
  { time: '09:15 AM', event: 'Back door opened', icon: <FaDoorOpen className="text-blue-400" /> },
  { time: '10:02 AM', event: 'Intrusion alert in garage', icon: <FaExclamationTriangle className="text-red-500" /> },
];

const SecurityLogs = () => {
  return (
    <div className="p-6 text-white">
      <h1 className="text-3xl font-bold mb-6 text-orange-500">Security Logs</h1>
      <div className="space-y-4">
        {logs.map((log, index) => (
          <div key={index} className="flex items-center bg-gray-800 p-4 rounded shadow-md">
            <div className="mr-4 text-2xl">{log.icon}</div>
            <div>
              <p className="text-lg text-gray-200">{log.event}</p>
              <p className="text-sm text-gray-400">{log.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SecurityLogs;
