import React from "react";
import { Menu } from "lucide-react";

export default function Navbar({ toggleSidebar }) {
  return (
    <nav className="flex items-center justify-between bg-blue-600 text-white px-6 py-4 shadow-md">
      {/* Title */}
      <h1 className="text-lg md:text-xl font-bold">Student Management</h1>

      {/* Toggle button */}
      <button
        onClick={toggleSidebar}
        className="toggle-btn p-2 rounded hover:bg-blue-500"
      >
        <Menu size={24} />
      </button>
    </nav>
  );
}
