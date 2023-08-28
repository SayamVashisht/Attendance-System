import React from 'react';
import StudentItem from './StudentItem';

function StudentList({ students, toggleAttendance }) {
  return (
    <div className="student-list">
      <h2 style={ {textAlign: "center" , fontSize: 30}}> <u>Student List</u></h2>
      <ul>
        {students.map((student) => (
          <StudentItem key={student.id} student={student} toggleAttendance={toggleAttendance} />
        ))}
      </ul>
    </div>
  );
}

export default StudentList;
