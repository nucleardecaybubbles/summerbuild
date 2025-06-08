import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import CourseFinder from './components/CourseFinder';
import FavoritesPage from './components/FavoritesPage';
import Help from './components/Help';

export default function App() {
  // Hash‐route state
  const [route, setRoute] = useState(
    window.location.hash.slice(1) || 'home'
  );
  useEffect(() => {
    const onHash = () => {
      setRoute(window.location.hash.slice(1) || 'home');
    };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  // Shared favorites and compare state
  const [favorites, setFavorites] = useState([]);
  const [compareList, setCompareList] = useState([]);

  // Toggle favorite (single‐click heart)
  const toggleFavorite = (course) => {
    setFavorites((favs) =>
      favs.some((f) => f.id === course.id)
        ? favs.filter((f) => f.id !== course.id)
        : [...favs, course]
    );
    // also remove from compare if unfavorited
    setCompareList((cl) => cl.filter((c) => c.id !== course.id));
  };

  // Toggle compare (double‐click heart OR compare button)
  const toggleCompare = (course) => {
    setCompareList((cl) =>
      cl.some((c) => c.id === course.id)
        ? cl.filter((c) => c.id !== course.id)
        : [...cl, course].slice(-3) // max 3
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="p-6">
        {route === 'home' && <Home />}

        {route === 'course-finder' && (
          <CourseFinder
            favorites={favorites}
            toggleFavorite={toggleFavorite}
            compareList={compareList}
            toggleCompare={toggleCompare}
          />
        )}

        {route === 'favorites' && (
          <FavoritesPage
            favorites={favorites}
            compareList={compareList}
            toggleCompare={toggleCompare}
          />
        )}

        {route === 'help' && <Help />}
      </main>
    </div>
  );
}
