// src/components/CourseFinder.js
import React, { useState } from 'react';

export default function CourseFinder({
  favorites,
  toggleFavorite,
  compareList,
  toggleCompare,
}) {
  const [filters, setFilters] = useState({
    university: '',
    semester: '',
    hostCode: '',
    ntuCode: '',
  });

  const sampleCourses = [
    { id:1, host:"TUM", name:"Introduction to AI", code:"CS3001", semester:"Semester 1", prereq:"None" },
    { id:2, host:"NUS", name:"Digital Signal Processing", code:"EE2005", semester:"Semester 2", prereq:"Signals & Systems" },
    { id:3, host:"UCB", name:"Thermodynamics", code:"ME1101", semester:"Full Year", prereq:"Heat Transfer I" },
    { id:4, host:"TUM", name:"Database Systems", code:"CS2100", semester:"Semester 2", prereq:"Intro to Programming" },
    { id:5, host:"NUS", name:"Signals and Systems", code:"EE2020", semester:"Semester 1", prereq:"Linear Algebra" },
    { id:6, host:"UCB", name:"Heat Transfer", code:"ME2101", semester:"Semester 2", prereq:"Thermodynamics" },
  ];

  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const filtered = sampleCourses.filter((c) => {
    return (
      (!filters.university || c.host === filters.university) &&
      (!filters.semester    || c.semester === filters.semester)    &&
      (!filters.hostCode    || c.code.includes(filters.hostCode)) &&
      (!filters.ntuCode     || c.name.toLowerCase().includes(filters.ntuCode.toLowerCase()))
    );
  });

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {/* --- Filter Row --- */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <select
          name="university"
          value={filters.university}
          onChange={handleChange}
          className="border p-2 rounded"
        >
          <option value="">All Universities</option>
          <option value="NUS">NUS</option>
          <option value="TUM">TUM</option>
          <option value="UCB">UCB</option>
        </select>

        <select
          name="semester"
          value={filters.semester}
          onChange={handleChange}
          className="border p-2 rounded"
        >
          <option value="">All Semesters</option>
          <option value="Semester 1">Semester 1</option>
          <option value="Semester 2">Semester 2</option>
          <option value="Full Year">Full Year</option>
        </select>

        <input
          type="text"
          name="ntuCode"
          placeholder="Search NTU Name"
          value={filters.ntuCode}
          onChange={handleChange}
          className="border p-2 rounded"
        />

        <input
          type="text"
          name="hostCode"
          placeholder="Search Host Code"
          value={filters.hostCode}
          onChange={handleChange}
          className="border p-2 rounded"
        />
      </div>

      {/* --- Matching Courses Table --- */}
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-4 py-2 text-left">University</th>
              <th className="border px-4 py-2 text-left">Course Name</th>
              <th className="border px-4 py-2 text-left">Code</th>
              <th className="border px-4 py-2 text-left">Semester</th>
              <th className="border px-4 py-2 text-left">Prerequisites</th>
              <th className="border px-4 py-2 text-left">Favorite</th>
              <th className="border px-4 py-2 text-left">Compare</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((c) => (
              <tr
                key={c.id}
                className="hover:bg-gray-50 cursor-pointer"
                onDoubleClick={() => toggleFavorite(c)}
              >
                <td className="border px-4 py-2">{c.host}</td>
                <td className="border px-4 py-2">{c.name}</td>
                <td className="border px-4 py-2">{c.code}</td>
                <td className="border px-4 py-2">{c.semester}</td>
                <td className="border px-4 py-2">{c.prereq}</td>
                <td className="border px-4 py-2 text-center">
                  <button onClick={() => toggleFavorite(c)} className="text-xl">
                    {favorites.some((f) => f.id === c.id) ? '❤️' : '🤍'}
                  </button>
                </td>
                <td className="border px-4 py-2 text-center">
                  <button onClick={() => toggleCompare(c)} className="text-xl">
                    {compareList.some((x) => x.id === c.id) ? '📊' : '➕'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
