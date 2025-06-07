import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className="bg-blue-800 text-white p-4 flex justify-between items-center sticky top-0">
      <div className="text-2xl font-bold">NTU Exchange</div>
      <nav className="flex space-x-4">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/finder" className="hover:underline">Course Finder</Link>
        <Link to="/favorites" className="hover:underline">My Favorites</Link>
        <Link to="/help" className="hover:underline">Help</Link>
      </nav>
    </header>
  );
}
