import React, { useEffect, useState } from 'react';
import { getAllCourses, createCourse } from '../apiService';
import TableComponent from '../components/TableComponent';
import '../styles.css';

const CoursesPage = () => {
  const [courses, setCourses] = useState([]);
  const [newCourse, setNewCourse] = useState({
    name: '',
    credits: '',
    schedule: '',
    level: '',
    start_date: '',
    end_date: '',
    capacity: '',
    teachers: ''
  });

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const response = await getAllCourses();
      setCourses(response.data);
    } catch (error) {
      console.error('Error al obtener los cursos:', error);
    }
  };

  const handleCreate = async () => {
    try {
      await createCourse(newCourse);
      fetchCourses();
    } catch (error) {
      console.error('Error al crear el curso:', error);
    }
  };

  return (
    <div className="page-container">
      <h1 className="page-title">Página de Cursos</h1>
      <p className="page-description">La lista de cursos se mostrará aquí.</p>
      <div className="form-container">
        <input
          type="text"
          placeholder="Nombre"
          value={newCourse.name}
          onChange={(e) => setNewCourse({ ...newCourse, name: e.target.value })}
        />
        <input
          type="number"
          placeholder="Créditos"
          value={newCourse.credits}
          onChange={(e) => setNewCourse({ ...newCourse, credits: e.target.value })}
        />
        <input
          type="text"
          placeholder="Horario"
          value={newCourse.schedule}
          onChange={(e) => setNewCourse({ ...newCourse, schedule: e.target.value })}
        />
        <input
          type="text"
          placeholder="Nivel"
          value={newCourse.level}
          onChange={(e) => setNewCourse({ ...newCourse, level: e.target.value })}
        />
        <input
          type="date"
          placeholder="Fecha de Inicio"
          value={newCourse.start_date}
          onChange={(e) => setNewCourse({ ...newCourse, start_date: e.target.value })}
        />
        <input
          type="date"
          placeholder="Fecha de Fin"
          value={newCourse.end_date}
          onChange={(e) => setNewCourse({ ...newCourse, end_date: e.target.value })}
        />
        <input
          type="number"
          placeholder="Capacidad"
          value={newCourse.capacity}
          onChange={(e) => setNewCourse({ ...newCourse, capacity: e.target.value })}
        />
        <input
          type="number"
          placeholder="Profesores"
          value={newCourse.teachers}
          onChange={(e) => setNewCourse({ ...newCourse, teachers: e.target.value })}
        />
        <button onClick={handleCreate}>Agregar Curso</button>
      </div>
      <TableComponent data={courses} />
    </div>
  );
};

export default CoursesPage;