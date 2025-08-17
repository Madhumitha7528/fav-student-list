import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [students, setStudents] = useState([
    "Rahul",
    "Priya",
    "Aman",
    "Sneha",
    "Vikram",
    "Anjali",
  ]);

  const [favorites, setFavorites] = useState([]);
  const [newStudent, setNewStudent] = useState("");

  const addFavorite = (student) => {
    if (!favorites.includes(student)) {
      setFavorites([...favorites, student]);
    }
  };

  const removeFavorite = (student) => {
    setFavorites(favorites.filter((fav) => fav !== student));
  };

  const addStudent = () => {
    if (newStudent.trim() !== "" && !students.includes(newStudent)) {
      setStudents([...students, newStudent]);
      setNewStudent(""); 
    }
  };

  return (
    <div className="container">
      <h1>🎓 Student List</h1>

      {/* Input Section */}
      <div className="input-section">
        <input
          type="text"
          placeholder="Enter student name"
          value={newStudent}
          onChange={(e) => setNewStudent(e.target.value)}
        />
        <button className="btn add" onClick={addStudent}>
          ➕ Add Student
        </button>
      </div>

      <div className="list-section">
        <h2>All Students</h2>
        <ul>
          {students.map((student, index) => (
            <li key={index} className="list-item">
              {student}
              <button
                className="btn add"
                onClick={() => addFavorite(student)}
                disabled={favorites.includes(student)}
              >
                {favorites.includes(student) ? "✅ Added" : "⭐ Add Favorite"}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="list-section">
        <h2>⭐ Favorite Students</h2>
        {favorites.length === 0 ? (
          <p>No favorites yet.</p>
        ) : (
          <ul>
            {favorites.map((student, index) => (
              <li key={index} className="list-item">
                {student}
                <button
                  className="btn delete"
                  onClick={() => removeFavorite(student)}
                >
                  ❌ Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default App;