import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { createStudentCourse } from '../apiService'; // Import createStudentCourse from apiService
import '../styles.css';

const FormStudentCourse = ({ show, handleClose, onStudentCourseCreated }) => {
  const [newStudentCourse, setNewStudentCourse] = useState({
    student_id: '',
    course_id: ''
  });

  const handleCreate = async () => {
    try {
      // Ensure all fields are filled
      if (!newStudentCourse.student_id || !newStudentCourse.course_id) {
        console.error('All fields are required');
        return;
      }
      console.log('Datos a enviar:', newStudentCourse); // Log data to verify structure
      await createStudentCourse(newStudentCourse); // Use createStudentCourse to send data
      setNewStudentCourse({
        student_id: '',
        course_id: ''
      });
      handleClose();
    } catch (error) {
      console.error('Error al crear el curso de estudiante:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Agregar Curso de Estudiante</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="form-container-column">
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
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancelar
        </Button>
        <Button variant="primary" onClick={handleCreate}>
          Agregar Curso de Estudiante
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default FormStudentCourse;