import React, { useEffect, useState } from 'react';
import { getAllStudents, createStudent, deleteStudent } from '../apiService';
import FormStudent from '../components/FormStudent';
import '../styles.css';

const StudentsPage = () => {
  const [students, setStudents] = useState([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetchStudents();
  }, []);

  useEffect(() => {
    console.log("Updated students state:", students); // Log updated students state
  }, [students]);

  const fetchStudents = async () => {
    try {
      const response = await getAllStudents();
      console.log('Full response:', response); // Log the entire response
      const studentsData = response.data || response; // Adjust this line based on actual structure
      console.log('Fetched students:', studentsData); // Debugging: Log fetched data
      setStudents(studentsData || []); // Ensure it's an array
    } catch (error) {
      console.error('Error fetching students:', error);
    }
  };

  const toggleForm = () => setShowForm(!showForm);

  const handleCreateStudent = async (studentData) => {
    try {
      await createStudent(studentData);
      fetchStudents(); // Refresh the list after creating a student
      toggleForm(); // Close the form
    } catch (error) {
      console.error('Error creating student:', error);
    }
  };

  const handleEditStudent = (student) => {
    // Logic to edit the student
    console.log('Edit student:', student);
  };

  const handleDeleteStudent = async (id) => {
    try {
      await deleteStudent(id); // Call the API to delete the student
      setStudents(students.filter(student => student.id !== id)); // Update state to remove the student
      console.log(`Deleted student with id: ${id}`);
    } catch (error) {
      console.error('Error deleting student:', error);
    }
  };

  return (
    <div className="page-container">
      <h1 className="page-title">Student Management</h1>
      <FormStudent show={showForm} handleClose={toggleForm} onStudentCreated={handleCreateStudent} />
      <button onClick={toggleForm}>Create</button>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.length > 0 ? (
            students.map((student, index) => (
              <tr key={student.id || index}>
                <td>{student.id}</td>
                <td>{student.email}</td>
                <td>
                  <button onClick={() => handleEditStudent(student)}>Edit</button>
                  <button onClick={() => handleDeleteStudent(student.id)}>Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3">No students available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default StudentsPage;