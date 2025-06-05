import React from 'react';
import { useNavigate } from 'react-router-dom';

const ToggleLights = () => {
  const navigate = useNavigate();

  return (
    <div className="p-6 text-white">
      <h1 className="text-3xl font-bold text-yellow-400 mb-4">Toggle Lights</h1>
      <p className="text-gray-300 mb-6">Easily turn your lights on or off with one click.</p>

      <button className="bg-yellow-600 hover:bg-yellow-500 px-6 py-3 rounded-md font-semibold transition">Toggle Lights</button>

      <div className="mt-8">
        <button
          onClick={() => navigate('/lighting')}
          className="text-sm text-gray-400 hover:text-yellow-300 mt-6"
        >
          ← Back to Lighting
        </button>
      </div>
    </div>
  );
};

export default ToggleLights;
