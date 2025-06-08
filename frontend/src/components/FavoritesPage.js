// src/components/FavoritesPage.js
import React from 'react';

export default function FavoritesPage({
  favorites,
  compareList,
  toggleCompare
}) {
  return (
    <div className="p-6">
      {/* My Favorites */}
      <h2 className="text-3xl font-bold mb-4">My Favorites</h2>

      {favorites.length === 0 ? (
        <p className="text-gray-600">No favorites yet.</p>
      ) : (
        <div className="overflow-x-auto mb-8">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2 text-left font-semibold">University</th>
                <th className="px-4 py-2 text-left font-semibold">Course Name</th>
                <th className="px-4 py-2 text-left font-semibold">Code</th>
                <th className="px-4 py-2 text-left font-semibold">Semester</th>
                <th className="px-4 py-2 text-left font-semibold">Compare</th>
              </tr>
            </thead>
            <tbody>
              {favorites.map((fav) => (
                <tr key={fav.id} className="border-t">
                  <td className="px-4 py-2">{fav.host}</td>
                  <td className="px-4 py-2">{fav.name}</td>
                  <td className="px-4 py-2">{fav.code}</td>
                  <td className="px-4 py-2">{fav.semester}</td>
                  <td className="px-4 py-2">
                    <button
                      onClick={() => toggleCompare(fav)}
                      className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                      📊
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Compare Courses */}
      <h2 className="text-3xl font-bold mb-4">Compare Courses</h2>

      {compareList.length === 0 ? (
        <p className="text-gray-600">No courses selected for comparison.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr>
                <th className="px-4 py-2"></th>
                {compareList.map((c) => (
                  <th
                    key={c.id}
                    className="px-4 py-2 text-left font-semibold"
                  >
                    {c.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="px-4 py-2 font-semibold">University</td>
                {compareList.map((c) => (
                  <td key={c.id + '-host'} className="px-4 py-2">
                    {c.host}
                  </td>
                ))}
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2 font-semibold">Course Code</td>
                {compareList.map((c) => (
                  <td key={c.id + '-code'} className="px-4 py-2">
                    {c.code}
                  </td>
                ))}
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2 font-semibold">Semester</td>
                {compareList.map((c) => (
                  <td key={c.id + '-sem'} className="px-4 py-2">
                    {c.semester}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
