import React from 'react';
import './App.css';
import TerminalText from './TerminalText';
import StudentList from './StudentList';
import StudentForm from './StudentForm';

function App() {
  const [students, setStudents] = React.useState([]);

  const toggleAttendance = (studentId) => {
    setStudents((prevStudents) =>
      prevStudents.map((student) =>
        student.id === studentId ? { ...student, isPresent: !student.isPresent } : student
      )
    );
  };

  const addStudent = (newStudent) => {
    const id = students.length + 1;
    const updatedStudents = [...students, { ...newStudent, id, isPresent: false }];
    setStudents(updatedStudents);
  };

  return (
    <div className="App">
      <h1 >
        <TerminalText
          texts={['Welcome to Attendance Checkpoint!',
          'Mark your attendance here',
        ]}
          interval={2000}
          loop={true}
        />
      </h1>
      <StudentForm addStudent={addStudent} />
      <StudentList students={students} toggleAttendance={toggleAttendance} />
    </div>
  );
}

export default App;
