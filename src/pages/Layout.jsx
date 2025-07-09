// src/pages/Layout.jsx
import React from "react";
import { Outlet, Link } from "react-router-dom";

export default function Layout() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Navbar */}
      <nav className="flex flex-col lg:flex-row lg:justify-between items-center px-6 py-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg space-y-4 lg:space-y-0">
        <div className="text-center lg:text-left">
          <div className="text-2xl font-bold">YOGANAND LANKAPALLI</div>
          <div className="text-base font-bold text-gray-200">Data Engineer / Data Analyst</div>
        </div>
        <div className="flex flex-wrap justify-center gap-6 text-sm font-semibold">
          <Link to="/" className="bg-white text-blue-700 py-2 px-3 rounded-full hover:bg-gray-200 transition">Home</Link>
          <Link to="/summary" className="bg-white text-blue-700 py-2 px-3 rounded-full hover:bg-gray-200 transition">Summary</Link>
          <Link to="/highlights" className="bg-white text-blue-700 py-2 px-3 rounded-full hover:bg-gray-200 transition">Highlights</Link>
          <Link to="/career" className="bg-white text-blue-700 py-2 px-3 rounded-full hover:bg-gray-200 transition">Career</Link>
          <Link to="/projects" className="bg-white text-blue-700 py-2 px-3 rounded-full hover:bg-gray-200 transition">Projects</Link>
          <Link to="/skills" className="bg-white text-blue-700 py-2 px-3 rounded-full hover:bg-gray-200 transition">Skills</Link>
          <Link to="/education" className="bg-white text-blue-700 py-2 px-3 rounded-full hover:bg-gray-200 transition">Education</Link>
          <Link to="/contact" className="bg-white text-blue-700 py-2 px-3 rounded-full hover:bg-gray-200 transition">Contact</Link>
        </div>
      </nav>

      {/* Page Content */}
      <main className="flex-grow max-w-6xl mx-auto px-6 py-10">
        <Outlet />
      </main>
    </div>
  );
}
