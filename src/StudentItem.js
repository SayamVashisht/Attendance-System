import React from 'react';

function StudentItem({ student, toggleAttendance }) {
  return (
    <li className={`student-item ${student.isPresent ? 'present' : 'absent'}`}>
      <span className="student-info">
        <span className="student-name">{student.name}</span>
        <span className="student-class">{student.class}</span>
        <span className="reg-number">Reg. Number  : {student.regNumber}</span>
        <span classname = "button"> Present</span>
      </span>
    </li>
  );
}

export default StudentItem;
