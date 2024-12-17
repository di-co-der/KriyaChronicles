import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
export default function Card() {

  const navigate = useNavigate();
  const cardColors = [
    { bg: "bg-blue-100", title: "text-blue-800" },
    { bg: "bg-orange-100", title: "text-orange-800" },
    { bg: "bg-red-100", title: "text-red-800" },
    { bg: "bg-green-100", title: "text-green-800" },
    { bg: "bg-purple-100", title: "text-purple-800" },
    { bg: "bg-teal-100", title: "text-teal-800" },
    { bg: "bg-pink-100", title: "text-pink-800" },
  ];

  // Example details to show when hovering
  const hoverDetails = [
    "Latest notices are displayed here.",
    "You can apply for your pending leaves.",
    "Monitor your attendance and working hours.",
    "View upcoming public holidays.",
    "Find employee information and profiles.",
    "Manage and plan your weekly schedules.",
    "Submit and track claims efficiently.",
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
      {[
        { title: "Notice", description: "View all your notices" },
        { title: "Apply for Leave", description: "Apply for leave here" },
        { title: "Attendance", description: "Track your attendance" },
        { title: "Holiday", description: "Check your holidays" },
        { title: "Employee Detail", description: "View employee details" },
        { title: "Calendar", description: "Plan your schedule" },
        { title: "Claim", description: "Manage your claims" },
      ].map((card, index) => {
        const { bg, title } = cardColors[index % cardColors.length];
        return (
          <div
            key={index}
            className={`relative p-6 shadow-md rounded-lg hover:shadow-lg transition-all duration-300 ${bg}`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={() => navigate("/DashbaordComponents")}
          >
            <h3 className={`text-lg font-semibold mb-2 ${title}`}>
              {card.title}
            </h3>
            <p className="text-gray-600">{card.description}</p>

            {/* Details shown on hover */}
            {hoveredIndex === index && (
              <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-90 rounded-lg shadow-lg p-4">
                <p className="text-gray-800 text-sm text-center">
                  {hoverDetails[index]}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

