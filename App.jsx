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

function App() {
  return (
    <Router>
      <div className="flex min-h-screen bg-gray-900 text-white">
        <Sidebar />
        <main className="flex-grow p-8 overflow-auto">
          <Routes>
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
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
