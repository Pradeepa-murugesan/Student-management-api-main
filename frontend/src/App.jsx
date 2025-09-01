import React from "react";
import Navbar from "./assets/components/Navbar";
import Footer from "./assets/components/Footer";
import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow p-6">
        <Outlet /> {/* 👈 Child pages will render here */}
      </main>
      <Footer />
    </div>
  );
}
