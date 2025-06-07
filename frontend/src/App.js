import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';
import CourseFinder from './components/CourseFinder';
import FavoritesPage from './components/FavoritesPage';
import Help from './components/Help';

function App() {
  // Pull favorites up so both pages can share them
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (course) => {
    setFavorites(prev =>
      prev.some(f => f.id === course.id)
        ? prev.filter(f => f.id !== course.id)
        : [...prev, course]
    );
  };

  return (
    <>
      <Navbar />
      <div className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="/finder"
            element={
              <CourseFinder
                favorites={favorites}
                toggleFavorite={toggleFavorite}
              />
            }
          />

          <Route
            path="/favorites"
            element={<FavoritesPage favorites={favorites} />}
          />

          <Route path="/help" element={<Help />} />

          {/* Redirect any unknown URL back to home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
