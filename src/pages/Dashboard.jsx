import React from 'react';
import Sidebar from '../compnents/Sidebar';
import Card from '../compnents/Card';
import Welcome from '../compnents/Welcome';

export default function Dashboard() {
  return (
    <div className="flex pt-8">
      {/* Sidebar - On the left side */}
      <Sidebar />

       {/* Welcome Section */}
       <div className="flex-1 flex flex-col">
        <div className="mt-20 px-6">
          <Welcome />
        </div>

      {/* Cards on the right side */}
      <div className="flex-1 p-6 mt-4">
        <Card /> 
      </div>
    </div>
    </div>
  );
}
