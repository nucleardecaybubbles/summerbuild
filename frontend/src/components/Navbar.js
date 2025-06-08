import React from 'react';

export default function Navbar() {
  return (
    <header className="bg-blue-800 text-white p-4 flex items-center space-x-8 sticky top-0 z-10">
      <div className="text-2xl font-bold">NTU Exchange</div>
      <nav className="flex space-x-4">
        <a href="#home"           className="hover:underline">Home</a>
        <a href="#course-finder"  className="hover:underline">Course Finder</a>
        <a href="#favorites"      className="hover:underline">My Favorites</a>
        <a href="#help"           className="hover:underline">Help</a>
      </nav>
    </header>
  );
}
