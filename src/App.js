import React, { useState } from 'react';
import './App.css';
import StudentList from './StudentList';

function App() {
  const [students, setStudents] = useState([
    { id: 1, name: 'Student 1', isPresent: false },
    { id: 2, name: 'Student 2', isPresent: false },
    { id: 3, name: 'Student 3', isPresent: false },
    // ... Add more students
  ]);

  const handleAttendanceChange = (studentId) => {
    setStudents((prevStudents) =>
      prevStudents.map((student) =>
        student.id === studentId
          ? { ...student, isPresent: !student.isPresent }
          : student
      )
    );
  };

  return (
    <div className="App">
      <h1>Class Attendance System</h1>
      <StudentList students={students} onAttendanceChange={handleAttendanceChange} />
    </div>
  );
}

export default App;
