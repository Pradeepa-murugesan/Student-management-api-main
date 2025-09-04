// src/layouts/DashboardLayout.jsx
import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

export default function DashboardLayout() {
  return (
    <div className="h-screen flex flex-col">
      {/* Top Navbar */}
      <Navbar />

      {/* Main content with sidebar + page */}
      <div className="flex flex-1">
        {/* Sidebar (left) */}
        <Sidebar />

        {/* Page content (right) */}
        <main className="flex-1 bg-gray-50 p-6 overflow-y-auto">
          <Outlet /> {/* Loads the selected page here */}
        </main>
      </div>
    </div>
  );
}
