import { Outlet } from "react-router-dom";
import Navbar from "./assets/components/Navbar";
import Sidebar from "./assets/components/Sidebar";
import { useState, useEffect } from "react";
import React from "react";

function App() {
  const [students, setStudents] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isSidebarOpen && !e.target.closest(".sidebar") && !e.target.closest(".toggle-btn")) {
        setIsSidebarOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isSidebarOpen]);

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Navbar with toggle button */}
      <Navbar toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />

      {/* Sidebar (left side) */}
      <Sidebar isOpen={isSidebarOpen} />

      {/* Main content */}
      <main className="flex-1 p-6">
        <Outlet context={{ students, setStudents }} />
      </main>
    </div>
  );
}

export default App;
