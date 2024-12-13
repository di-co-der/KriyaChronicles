import React from 'react';

export default function Card() {
  const cardColors = [
    { bg: "bg-blue-100", title: "text-blue-800" },  
    { bg: "bg-orange-100", title: "text-orange-800" }, 
    { bg: "bg-red-100", title: "text-red-800" }, 
    { bg: "bg-green-100", title: "text-green-800" },
    { bg: "bg-purple-100", title: "text-purple-800" }, 
    { bg: "bg-teal-100", title: "text-teal-800" }, 
    { bg: "bg-pink-100", title: "text-pink-800" }, 
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 px-4">
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
            className={`p-6 shadow-md rounded-lg hover:shadow-lg transition-shadow ${bg}`} // Apply dynamic background color
          >
            <h3 className={`text-lg font-semibold mb-2 ${title}`}> {/* Apply darker title text color */}
              {card.title}
            </h3>
            <p className="text-gray-600">{card.description}</p>
          </div>
        );
      })}
    </div>
  );
}
