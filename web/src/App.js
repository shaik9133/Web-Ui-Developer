import React from 'react';
import Dashboard from './Dashboard';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-1">
        <Dashboard />
      </div>
    </div>
  );
};

export default App;
