import React from 'react';
import StudentItem from './StudentItem';

function StudentList({ students, onAttendanceChange }) {
  return (
    <div className="student-list">
      <h2>Student List</h2>
      <ul>
        {students.map((student) => (
          <StudentItem
            key={student.id}
            student={student}
            onAttendanceChange={onAttendanceChange}
          />
        ))}
      </ul>
    </div>
  );
}

export default StudentList;
