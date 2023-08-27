import React from 'react';
import StudentItem from './StudentItem';

function StudentList({ students, toggleAttendance }) {
  return (
    <div className="student-list">
      <h2>Student List</h2>
      <ul>
        {students.map((student) => (
          <StudentItem key={student.id} student={student} toggleAttendance={toggleAttendance} />
        ))}
      </ul>
    </div>
  );
}

export default StudentList;
