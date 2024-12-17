import React from "react";

const Sidebar = () => {
  return (
    <div className="w-64 min-h-screen bg-[#6C6EF5] text-white font-bold flex flex-col transition-all duration-300 mt-14">
        <div className="flex flex-col justify-between h-full">
      {/* Menu Items */}
      <ul className="mt-4 space-y-4 px-4">
        <li className="hover:text-blue-900 cursor-pointer">Dashboard</li>
        <li className="hover:text-blue-900 cursor-pointer">Notice</li>
        <li className="hover:text-blue-900 cursor-pointer">Apply for Leave</li>
        <li className="hover:text-blue-900 cursor-pointer">Attendance</li>
        <li className="hover:text-blue-900 cursor-pointer">Holiday</li>
        <li className="hover:text-blue-900 cursor-pointer">Employee Detail</li>
        <li className="hover:text-blue-900 cursor-pointer">Calendar</li>
        <li className="hover:text-blue-900 cursor-pointer">Claim</li>
      </ul>

      {/* Logout Section */}
      <div className="p-4 border-t border-blue-700 mt-60">
        <button className="w-full text-left hover:text-blue-300">Logout</button>
      </div>
    </div>
    </div>
  );
};

export default Sidebar;
