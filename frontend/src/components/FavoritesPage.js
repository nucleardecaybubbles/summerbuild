// src/components/FavoritesPage.js
import React from 'react';

export default function FavoritesPage({ favorites }) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">My Favorites</h2>
      {favorites.length === 0 ? (
        <p>No favorites yet!</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {favorites.map(fav => (
            <div key={fav.id} className="border-2 border-black p-4 rounded">
              <p><strong>University:</strong> {fav.host}</p>
              <p><strong>Course:</strong> {fav.name}</p>
              <p>{fav.code} • {fav.semester}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
