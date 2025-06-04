import { FaCamera, FaBell, FaRunning, FaClipboardList } from 'react-icons/fa';

const Security = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Security System</h1>
      <p className="mb-6 text-gray-300">Monitor and control all security devices in your property.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        <div className="card">
          <FaCamera className="text-4xl text-orange-400 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Cameras</h2>
          <p className="mb-4 text-gray-300">View live feeds from all your security cameras.</p>
          <button className="btn-subsystem">View Camera Feeds</button>
        </div>
        <div className="card">
          <FaBell className="text-4xl text-orange-400 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Alarm System</h2>
          <p className="mb-4 text-gray-300">Arm or disarm your property’s alarm system.</p>
          <button className="btn-subsystem">Toggle Alarm</button>
        </div>
        <div className="card">
          <FaRunning className="text-4xl text-orange-400 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Motion Sensors</h2>
          <p className="mb-4 text-gray-300">Check the status of all motion sensors.</p>
          <button className="btn-subsystem">View Sensors</button>
        </div>
        <div className="card">
          <FaClipboardList className="text-4xl text-orange-400 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Security Logs</h2>
          <p className="mb-4 text-gray-300">Review recent security events and alerts.</p>
          <button className="btn-subsystem">View Logs</button>
        </div>
      </div>
    </div>
  );
};

export default Security;
