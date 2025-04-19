import React, { useEffect, useState } from 'react';
import { getAllTeachers, createTeacher } from '../apiService';
import TableComponent from '../components/TableComponent';
import '../styles.css';

const TeachersPage = () => {
  const [teachers, setTeachers] = useState([]);
  const [newTeacher, setNewTeacher] = useState({
    specialty: '',
    teach: ''
  });

  useEffect(() => {
    fetchTeachers();
  }, []);

  const fetchTeachers = async () => {
    try {
      const response = await getAllTeachers();
      setTeachers(response.data);
    } catch (error) {
      console.error('Error al obtener los profesores:', error);
    }
  };

  const handleCreate = async () => {
    try {
      await createTeacher(newTeacher);
      fetchTeachers();
    } catch (error) {
      console.error('Error al crear el profesor:', error);
    }
  };

  return (
    <div className="page-container">
      <h1 className="page-title">Página de Profesores</h1>
      <p className="page-description">La lista de profesores se mostrará aquí.</p>
      <div className="form-container">
        <input
          type="text"
          placeholder="Especialidad"
          value={newTeacher.specialty}
          onChange={(e) => setNewTeacher({ ...newTeacher, specialty: e.target.value })}
        />
        <input
          type="text"
          placeholder="Enseñanza"
          value={newTeacher.teach}
          onChange={(e) => setNewTeacher({ ...newTeacher, teach: e.target.value })}
        />
        <button onClick={handleCreate}>Agregar Profesor</button>
      </div>
      <TableComponent data={teachers} />
    </div>
  );
};

export default TeachersPage;