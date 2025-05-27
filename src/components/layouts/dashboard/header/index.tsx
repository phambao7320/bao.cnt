import React from "react";

const HeaderDashboard = () => {
  return (
    <div className="flex items-center px-4 md:px-8 py-3 justify-end border-b">
      <button className="bg-gray-600 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm">
        Logout
      </button>
    </div>
  );
};

export default HeaderDashboard;
