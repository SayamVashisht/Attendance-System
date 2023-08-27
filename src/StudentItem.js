import React from 'react';

function StudentItem({ student, onAttendanceChange }) {
  return (
    <li className={student.isPresent ? 'present' : 'absent'}>
      {student.name}
      <input
        type="checkbox"
        checked={student.isPresent}
        onChange={() => onAttendanceChange(student.id)}
      />
    </li>
  );
}

export default StudentItem;
