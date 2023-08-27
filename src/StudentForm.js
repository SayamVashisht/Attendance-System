import React, { useState } from 'react';

function StudentForm({ addStudent }) {
  const [studentData, setStudentData] = useState({
    name: '',
    class: '',
    regNumber: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setStudentData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (studentData.name && studentData.class && studentData.regNumber) {
      addStudent(studentData);
      setStudentData({
        name: '',
        class: '',
        regNumber: ''
      });
    }
  };

  return (
    <form className="student-form" onSubmit={handleSubmit}>
      <h2>Add Student</h2>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={studentData.name}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="class"
        placeholder="Class"
        value={studentData.class}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="regNumber"
        placeholder="Registration Number"
        value={studentData.regNumber}
        onChange={handleChange}
        required
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default StudentForm;
