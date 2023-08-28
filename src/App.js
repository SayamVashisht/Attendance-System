<<<<<<< HEAD
import React from 'react';
import './App.css';
import TerminalText from './TerminalText';
=======
import React, { useState } from 'react';
import './App.css';
>>>>>>> 6812d58e505d897e97e9ffbc7b16d9c592b97338
import StudentList from './StudentList';
import StudentForm from './StudentForm';

function App() {
<<<<<<< HEAD
  const [students, setStudents] = React.useState([]);
=======
  const [students, setStudents] = useState([]);
>>>>>>> 6812d58e505d897e97e9ffbc7b16d9c592b97338

  const toggleAttendance = (studentId) => {
    setStudents((prevStudents) =>
      prevStudents.map((student) =>
        student.id === studentId ? { ...student, isPresent: !student.isPresent } : student
      )
    );
  };

  const addStudent = (newStudent) => {
<<<<<<< HEAD
=======
    // Generate a unique ID for the new student
>>>>>>> 6812d58e505d897e97e9ffbc7b16d9c592b97338
    const id = students.length + 1;
    const updatedStudents = [...students, { ...newStudent, id, isPresent: false }];
    setStudents(updatedStudents);
  };

  return (
    <div className="App">
<<<<<<< HEAD
      <h1 >
        <TerminalText
          texts={['Welcome to Attendance Checkpoint!',
          'Mark your attendance here',
        ]}
          interval={2000}
          loop={true}
        />
      </h1>
=======
      <h1>Class Attendance System</h1>
>>>>>>> 6812d58e505d897e97e9ffbc7b16d9c592b97338
      <StudentForm addStudent={addStudent} />
      <StudentList students={students} toggleAttendance={toggleAttendance} />
    </div>
  );
}

export default App;
