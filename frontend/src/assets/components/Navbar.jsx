import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white px-6 py-4 shadow-md flex justify-between items-center">
      <h1 className="text-xl font-bold">🎓 Student Management</h1>
      <ul className="flex space-x-6">
        <li>
          <Link to="/home" className="hover:text-gray-200">Home</Link>
        </li>
        <li>
          <Link to="/students" className="hover:text-gray-200">Students</Link>
        </li>
        <li>
          <Link to="/add-student" className="hover:text-gray-200">Add Student</Link>
        </li>
      </ul>
    </nav>
  );
}
