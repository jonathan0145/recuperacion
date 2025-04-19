import React, { useEffect, useState } from 'react';
import { getAllStudents, createStudent } from '../apiService';
import TableComponent from '../components/TableComponent';
import '../styles.css';

const StudentsPage = () => {
  const [students, setStudents] = useState([]);
  const [newStudent, setNewStudent] = useState({
    email: '',
    enrollment_date: '',
    student_status: '',
    grade_level: ''
  });

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await getAllStudents();
      setStudents(response.data);
    } catch (error) {
      console.error('Error al obtener los estudiantes:', error);
    }
  };

  const handleCreate = async () => {
    try {
      await createStudent(newStudent);
      fetchStudents();
    } catch (error) {
      console.error('Error al crear el estudiante:', error);
    }
  };

  return (
    <div className="page-container">
      <h1 className="page-title">Página de Estudiantes</h1>
      <p className="page-description">La lista de estudiantes se mostrará aquí.</p>
      <div className="form-container">
        <input
          type="email"
          placeholder="Email"
          value={newStudent.email}
          onChange={(e) => setNewStudent({ ...newStudent, email: e.target.value })}
        />
        <input
          type="date"
          placeholder="Fecha de Inscripción"
          value={newStudent.enrollment_date}
          onChange={(e) => setNewStudent({ ...newStudent, enrollment_date: e.target.value })}
        />
        <input
          type="text"
          placeholder="Estado del Estudiante"
          value={newStudent.student_status}
          onChange={(e) => setNewStudent({ ...newStudent, student_status: e.target.value })}
        />
        <input
          type="text"
          placeholder="Nivel de Grado"
          value={newStudent.grade_level}
          onChange={(e) => setNewStudent({ ...newStudent, grade_level: e.target.value })}
        />
        <button onClick={handleCreate}>Agregar Estudiante</button>
      </div>
      <TableComponent data={students} />
    </div>
  );
};

export default StudentsPage;