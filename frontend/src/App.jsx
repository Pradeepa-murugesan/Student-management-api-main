import { Outlet } from "react-router-dom";
import Navbar from "./assets/components/Navbar";
import { useState } from "react";
import React from "react"
function App() {
  // Shared state here
  const [students, setStudents] = useState([]);

  return (
    <div>
      <Navbar />
      {/* Pass students + setStudents to all children */}
      <Outlet context={{ students, setStudents }} />
    </div>
  );
}

export default App;
