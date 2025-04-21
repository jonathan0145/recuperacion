import React, { useEffect, useState } from 'react';
import { getAllTeachers, createTeacher, deleteTeacher } from '../apiService';
import FormTeacher from '../components/FormTeacher';
import '../styles.css';

const TeachersPage = () => {
  const [teachers, setTeachers] = useState([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetchTeachers();
  }, []);

  useEffect(() => {
    console.log("Updated teachers state:", teachers); // Log updated teachers state
  }, [teachers]);

  const fetchTeachers = async () => {
    try {
      const response = await getAllTeachers();
      console.log('Full response:', response); // Log the entire response
      const teachersData = response.data || response; // Adjust this line based on actual structure
      console.log('Fetched teachers:', teachersData); // Debugging: Log fetched data
      setTeachers(teachersData || []); // Ensure it's an array
    } catch (error) {
      console.error('Error fetching teachers:', error);
    }
  };

  const toggleForm = () => setShowForm(!showForm);

  const handleCreateTeacher = async (teacherData) => {
    try {
      await createTeacher(teacherData);
      fetchTeachers(); // Refresh the list after creating a teacher
      toggleForm(); // Close the form
    } catch (error) {
      console.error('Error creating teacher:', error);
    }
  };

  const handleEditTeacher = (teacher) => {
    // Logic to edit the teacher
    console.log('Edit teacher:', teacher);
  };

  const handleDeleteTeacher = async (id) => {
    try {
      await deleteTeacher(id); // Call the API to delete the teacher
      setTeachers((prevTeachers) => prevTeachers.filter(teacher => teacher.id !== id)); // Update state to remove the teacher
      console.log(`Deleted teacher with id: ${id}`);
    } catch (error) {
      console.error('Error deleting teacher:', error);
    }
  };

  return (
    <div className="page-container">
      <h1 className="page-title">Teacher Management</h1>
      <FormTeacher show={showForm} handleClose={toggleForm} onTeacherCreated={handleCreateTeacher} />
      <button onClick={toggleForm}>Create</button>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Specialty</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {teachers.length > 0 ? (
            teachers.map((teacher, index) => (
              <tr key={teacher.id || index}>
                <td>{teacher.id}</td>
                <td>{teacher.specialty}</td>
                <td>
                  <button onClick={() => handleEditTeacher(teacher)}>Edit</button>
                  <button onClick={() => handleDeleteTeacher(teacher.id)}>Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3">No teachers available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TeachersPage;