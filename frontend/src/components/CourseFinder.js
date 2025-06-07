// src/components/CourseFinder.js
import React, { useState } from 'react';

export default function CourseFinder({ favorites, toggleFavorite }) {
  const [filters, setFilters] = useState({
    university: '',
    semester: '',
    ntuCourseCode: '',
    hostCourseCode: '',
  });

  const sampleCourses = [
    { id:1, name:"Introduction to AI", host:"TUM", code:"CS3001", semester:"Semester 1" },
    { id:2, name:"Digital Signal Processing", host:"NUS", code:"EE2005", semester:"Semester 2" },
    // …add more
  ];

  const handleChange = e => {
    setFilters(f => ({ ...f, [e.target.name]: e.target.value }));
  };

  const filtered = sampleCourses.filter(c =>
    (!filters.university || c.host === filters.university) &&
    (!filters.semester || c.semester === filters.semester)
  );

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Course Finder</h2>
      {/* your filter inputs here… */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <select name="university" onChange={handleChange} value={filters.university} className="border p-2">
          <option value="">Select Univ</option>
          <option value="TUM">TUM</option>
          <option value="NUS">NUS</option>
        </select>

        <select name="semester" onChange={handleChange} value={filters.semester} className="border p-2">
          <option value="">Select Sem</option>
          <option value="Semester 1">Semester 1</option>
          <option value="Semester 2">Semester 2</option>
        </select>
      </div>

      <h3 className="text-xl font-semibold mb-2">Matching Courses</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {filtered.map(course => (
          <div key={course.id} className="border p-4 rounded">
            <div className="flex justify-between items-center mb-2">
              <strong>{course.name}</strong>
              <button onClick={() => toggleFavorite(course)}>
                {favorites.some(f => f.id === course.id) ? '❤️' : '🤍'}
              </button>
            </div>
            <p className="text-sm text-gray-600">
              {course.host} • {course.code} • {course.semester}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
