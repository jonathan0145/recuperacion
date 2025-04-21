import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { createCourse } from '../apiService'; // Import createCourse from apiService
import '../styles.css';

const FormCourse = ({ show, handleClose, onCourseCreated }) => {
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

  const handleCreate = async () => {
    try {
      // Ensure all fields are filled
      if (!newCourse.name || !newCourse.credits || !newCourse.schedule || !newCourse.level || !newCourse.start_date || !newCourse.end_date || !newCourse.capacity || !newCourse.teachers) {
        console.error('All fields are required');
        return;
      }
      console.log('Datos a enviar:', newCourse); // Log data to verify structure
      await createCourse(newCourse); // Use createCourse to send data
      setNewCourse({
        name: '',
        credits: '',
        schedule: '',
        level: '',
        start_date: '',
        end_date: '',
        capacity: '',
        teachers: ''
      });
      handleClose();
    } catch (error) {
      console.error('Error al crear el curso:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Agregar Curso</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="form-container-column">
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
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancelar
        </Button>
        <Button variant="primary" onClick={handleCreate}>
          Agregar Curso
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default FormCourse;