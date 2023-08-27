import React, { useState } from 'react';
import './App.css';
import StudentList from './StudentList';
import StudentForm from './StudentForm';

function App() {
  const [students, setStudents] = useState([]);

  const toggleAttendance = (studentId) => {
    setStudents((prevStudents) =>
      prevStudents.map((student) =>
        student.id === studentId ? { ...student, isPresent: !student.isPresent } : student
      )
    );
  };

  const addStudent = (newStudent) => {
    // Generate a unique ID for the new student
    const id = students.length + 1;
    const updatedStudents = [...students, { ...newStudent, id, isPresent: false }];
    setStudents(updatedStudents);
  };

  return (
    <div className="App">
      <h1>Class Attendance System</h1>
      <StudentForm addStudent={addStudent} />
      <StudentList students={students} toggleAttendance={toggleAttendance} />
    </div>
  );
}

export default App;
