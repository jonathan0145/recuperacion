import React, { useEffect, useState } from 'react';
import { getAllStudentCourses, createStudentCourse, deleteStudentCourse } from '../apiService';
import FormStudentCourse from '../components/FormStudentCourse';
import '../styles.css';

const StudentCoursesPage = () => {
  const [studentCourses, setStudentCourses] = useState([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetchStudentCourses();
  }, []);

  const fetchStudentCourses = async () => {
    try {
      const response = await getAllStudentCourses();
      console.log('Fetched student courses:', response); // Log the entire response
      const studentCoursesData = response.data || response; // Adjust this line based on actual structure
      console.log('Fetched student courses:', studentCoursesData); // Debugging: Log fetched data
      setStudentCourses(studentCoursesData || []); // Ensure it's an array
    } catch (error) {
      console.error('Error fetching student courses:', error);
    }
  };

  const toggleForm = () => setShowForm(!showForm);

  const handleCreateStudentCourse = async (studentCourseData) => {
    try {
      await createStudentCourse(studentCourseData);
      fetchStudentCourses(); // Refresh the list after creating a student course
      toggleForm(); // Close the form
    } catch (error) {
      console.error('Error creating student course:', error);
    }
  };

  const handleDeleteStudentCourse = async (studentId, courseId) => {
    try {
      if (!studentId || !courseId) {
        console.error('No IDs provided for deletion.');
        return;
      }
      console.log(`Attempting to delete student course with studentId: ${studentId} and courseId: ${courseId}`); // Log the ids being deleted
      await deleteStudentCourse(studentId, courseId); // Call the API to delete the student course
      setStudentCourses((prevStudentCourses) => prevStudentCourses.filter(sc => sc.student_id !== studentId || sc.course_id !== courseId)); // Update state to remove the student course
      console.log(`Deleted student course with studentId: ${studentId} and courseId: ${courseId}`);
    } catch (error) {
      console.error('Error deleting student course:', error);
    }
  };

  const handleEditStudentCourse = (studentCourse) => {
    // Logic to edit the student course
    console.log('Edit student course:', studentCourse);
  };

  return (
    <div className="page-container">
      <h1 className="page-title">Student Courses Management</h1>
      <FormStudentCourse show={showForm} handleClose={toggleForm} onStudentCourseCreated={handleCreateStudentCourse} />
      <button onClick={toggleForm}>Create</button>
      <table className="table">
        <thead>
          <tr>
            <th>Student ID</th>
            <th>Course ID</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {studentCourses.length > 0 ? (
            studentCourses.map((sc, index) => (
              <tr key={`${sc.student_id}-${sc.course_id}`}>
                <td>{sc.student_id}</td>
                <td>{sc.course_id}</td>
                <td>
                  <button onClick={() => handleEditStudentCourse(sc)}>Edit</button>
                  <button onClick={() => handleDeleteStudentCourse(sc.student_id, sc.course_id)}>Delete</button> {/* Pass both IDs */}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3">No student courses available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default StudentCoursesPage;