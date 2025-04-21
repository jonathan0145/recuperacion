import React, { useEffect, useState } from 'react';
import { getAllCourses, createCourse, deleteCourse } from '../apiService';
import FormCourse from '../components/FormCourse';
import '../styles.css';

const CoursesPage = () => {
  const [courses, setCourses] = useState([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const response = await getAllCourses();
      console.log('Fetched courses:', response); // Log the entire response
      const coursesData = response.data || response; // Adjust this line based on actual structure
      console.log('Fetched courses:', coursesData); // Debugging: Log fetched data
      setCourses(coursesData || []); // Ensure it's an array
    } catch (error) {
      console.error('Error fetching courses:', error);
    }
  };

  const toggleForm = () => setShowForm(!showForm);

  const handleCreateCourse = async (courseData) => {
    try {
      await createCourse(courseData);
      fetchCourses(); // Refresh the list after creating a course
      toggleForm(); // Close the form
    } catch (error) {
      console.error('Error creating course:', error);
    }
  };

  const handleDeleteCourse = async (id) => {
    try {
      await deleteCourse(id); // Call the API to delete the course
      setCourses((prevCourses) => prevCourses.filter(course => course.id !== id)); // Update state to remove the course
      console.log(`Deleted course with id: ${id}`);
    } catch (error) {
      console.error('Error deleting course:', error);
    }
  };

  const handleEditCourse = (course) => {
    // Logic to edit the course
    console.log('Edit course:', course);
  };

  return (
    <div className="page-container">
      <h1 className="page-title">Course Management</h1>
      <FormCourse show={showForm} handleClose={toggleForm} onCourseCreated={handleCreateCourse} />
      <button onClick={toggleForm}>Create</button>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {courses.length > 0 ? (
            courses.map((course, index) => (
              <tr key={course.id || index}>
                <td>{course.id}</td>
                <td>{course.name}</td>
                <td>
                  <button onClick={() => handleEditCourse(course)}>Edit</button> {/* Add Edit button */}
                  <button onClick={() => handleDeleteCourse(course.id)}>Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3">No courses available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CoursesPage;