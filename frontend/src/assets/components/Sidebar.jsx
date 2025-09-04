import React from "react";
import { Link } from "react-router-dom";
import { Home, Users, BookOpen, ClipboardList, MessageSquare } from "lucide-react";

export default function Sidebar({ isOpen }) {
  const links = [
    { name: "Dashboard", path: "/", icon: <Home size={20} /> },
    { name: "Students", path: "/students", icon: <Users size={20} /> },
    { name: "Courses", path: "/courses", icon: <BookOpen size={20} /> },
    { name: "Attendance", path: "/attendance", icon: <ClipboardList size={20} /> },
    { name: "Feedback", path: "/feedback", icon: <MessageSquare size={20} /> },
  ];

  return (
    <aside
      className={`sidebar fixed top-0 left-0 h-full w-64 bg-gray-900 text-white shadow-lg transform 
        ${isOpen ? "translate-x-0" : "-translate-x-full"} 
        transition-transform duration-300 ease-in-out z-40`}
    >
      {/* Logo */}
      <div className="p-6 text-center border-b border-gray-700">
        <h2 className="text-xl font-bold">🎓 Student Mgmt</h2>
      </div>

      {/* Links */}
      <nav className="p-4 space-y-2">
        {links.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            className="flex items-center gap-3 px-4 py-2 rounded-md hover:bg-gray-700 transition"
          >
            {link.icon}
            <span>{link.name}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}
