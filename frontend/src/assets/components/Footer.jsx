import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-4 mt-8 text-center">
      <p>© {new Date().getFullYear()} Student Management App. All rights reserved.</p>
    </footer>
  );
}
