import React, { useEffect, useState } from 'react';
import { getAllStudentCourses, createStudentCourse } from '../apiService';
import TableComponent from '../components/TableComponent';
import '../styles.css';

const StudentCoursesPage = () => {
  const [studentCourses, setStudentCourses] = useState([]);
  const [newStudentCourse, setNewStudentCourse] = useState({
    student_id: '',
    course_id: ''
  });

  useEffect(() => {
    fetchStudentCourses();
  }, []);

  const fetchStudentCourses = async () => {
    try {
      const response = await getAllStudentCourses();
      setStudentCourses(response.data);
    } catch (error) {
      console.error('Error al obtener los cursos de estudiantes:', error);
    }
  };

  const handleCreate = async () => {
    try {
      await createStudentCourse(newStudentCourse);
      fetchStudentCourses();
    } catch (error) {
      console.error('Error al crear el curso de estudiante:', error);
    }
  };

  return (
    <div className="page-container">
      <h1 className="page-title">Página de Cursos de Estudiantes</h1>
      <p className="page-description">La lista de cursos de estudiantes se mostrará aquí.</p>
      <div className="form-container">
        <input
          type="number"
          placeholder="ID del Estudiante"
          value={newStudentCourse.student_id}
          onChange={(e) => setNewStudentCourse({ ...newStudentCourse, student_id: e.target.value })}
        />
        <input
          type="number"
          placeholder="ID del Curso"
          value={newStudentCourse.course_id}
          onChange={(e) => setNewStudentCourse({ ...newStudentCourse, course_id: e.target.value })}
        />
        <button onClick={handleCreate}>Agregar Curso de Estudiante</button>
      </div>
      <TableComponent data={studentCourses} />
    </div>
  );
};

export default StudentCoursesPage;