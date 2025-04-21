import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { createStudent } from '../apiService'; // Import createStudent from apiService
import '../styles.css';

const FormStudent = ({ show, handleClose, onStudentCreated }) => {
  const [newStudent, setNewStudent] = useState({
    email: '',
    enrollment_date: '',
    student_status: '',
    grade_level: ''
  });

  const handleCreate = async () => {
    try {
      // Ensure all fields are filled
      if (!newStudent.email || !newStudent.enrollment_date || !newStudent.student_status || !newStudent.grade_level) {
        console.error('All fields are required');
        return;
      }
      console.log('Datos a enviar:', newStudent); // Log data to verify structure
      await createStudent(newStudent); // Use createStudent to send data
      setNewStudent({
        email: '',
        enrollment_date: '',
        student_status: '',
        grade_level: ''
      });
      handleClose();
    } catch (error) {
      console.error('Error al crear el estudiante:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Agregar Estudiante</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="form-container-column">
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
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancelar
        </Button>
        <Button variant="primary" onClick={handleCreate}>
          Agregar Estudiante
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default FormStudent;