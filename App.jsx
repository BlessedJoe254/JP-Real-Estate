import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Sidebar from './components/Sidebar';

import Dashboard from './pages/Dashboard';
import Security from './pages/Security';
import DoorLock from './pages/DoorLock';
import HVAC from './pages/HVAC';
import Lighting from './pages/Lighting';
import Irrigation from './pages/Irrigation';
import FireDetection from './pages/FireDetection';
import Blinds from './pages/Blinds';
import Energy from './pages/Energy';
import Doorbell from './pages/Doorbell';
import Poultry from './pages/Poultry';
import FishPond from './pages/FishPond';
import Fence from './pages/Fence';
import Waste from './pages/Waste';
import Clothesline from './pages/Clothesline';
import Robot from './pages/Robot';

// Dashboard detail pages
import SystemStatus from './pages/SystemStatus';
import SecurityLogs from './pages/SecurityLogs';
import EnergyStats from './pages/EnergyStats';
import WaterStats from './pages/WaterStats';

// Security detail pages
import CameraFeeds from './pages/CameraFeeds';
import ToggleAlarm from './pages/ToggleAlarm';
import SensorsView from './pages/SensorsView';
import SecurityLogDetail from './pages/SecurityLogs';

// Door Lock detail pages
import LockStatus from './pages/LockStatus';
import LockAccessLog from './pages/LockAccessLog';
import LockControl from './pages/LockControl';
import LockUsers from './pages/LockUsers'; // ✅ Add this line

function App() {
  return (
    <Router>
      <div className="flex min-h-screen bg-gray-900 text-white">
        <Sidebar />
        <main className="flex-grow p-8 overflow-auto">
          <Routes>
            {/* Main Pages */}
            <Route path="/" element={<Dashboard />} />
            <Route path="/security" element={<Security />} />
            <Route path="/door-lock" element={<DoorLock />} />
            <Route path="/hvac" element={<HVAC />} />
            <Route path="/lighting" element={<Lighting />} />
            <Route path="/irrigation" element={<Irrigation />} />
            <Route path="/fire-detection" element={<FireDetection />} />
            <Route path="/blinds" element={<Blinds />} />
            <Route path="/energy" element={<Energy />} />
            <Route path="/doorbell" element={<Doorbell />} />
            <Route path="/poultry" element={<Poultry />} />
            <Route path="/fish-pond" element={<FishPond />} />
            <Route path="/fence" element={<Fence />} />
            <Route path="/waste" element={<Waste />} />
            <Route path="/clothesline" element={<Clothesline />} />
            <Route path="/robot" element={<Robot />} />

            {/* Dashboard Stats Pages */}
            <Route path="/system-status" element={<SystemStatus />} />
            <Route path="/security-logs" element={<SecurityLogs />} />
            <Route path="/energy-stats" element={<EnergyStats />} />
            <Route path="/water-stats" element={<WaterStats />} />

            {/* Security Subpages */}
            <Route path="/view-camera-feeds" element={<CameraFeeds />} />
            <Route path="/toggle-alarm" element={<ToggleAlarm />} />
            <Route path="/view-sensors" element={<SensorsView />} />
            <Route path="/view-logs" element={<SecurityLogDetail />} />

            {/* Door Lock Subpages */}
            <Route path="/lock-status" element={<LockStatus />} />
            <Route path="/lock-access-logs" element={<LockAccessLog />} /> {/* ✅ fixed */}
            <Route path="/remote-lock-control" element={<LockControl />} /> {/* ✅ fixed */}
            <Route path="/manage-lock-users" element={<LockUsers />} /> {/* ✅ NEW */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
