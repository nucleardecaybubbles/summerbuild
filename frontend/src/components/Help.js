import React from 'react';

export default function Help() {
  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">Help &amp; FAQ</h2>
      <p className="mb-2">
        Use the navigation links to switch between Home, Course Finder,
        My Favorites, and Help.
      </p>
      <p className="mb-2">
        <strong>Course Finder:</strong> Filter by University and Semester,
        then click the ❤️ to favorite or double‐click the card to unfavorite.
      </p>
      <p className="mb-2">
        <strong>My Favorites:</strong> See your saved courses and click the
        ➕ / 📊 on each card to add or remove it from the comparison table.
      </p>
      <p>
        Once you have 1–3 courses selected for comparison, a table will
        appear below showing their details side-by-side.
      </p>
    </div>
  );
}
