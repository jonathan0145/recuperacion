import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { createTeacher } from '../apiService'; // Import createTeacher from apiService
import '../styles.css';

const FormTeacher = ({ show, handleClose, onTeacherCreated }) => {
  const [newTeacher, setNewTeacher] = useState({
    specialty: '',
    teach: '',
    person_id: '' // Ensure person_id is included if required
  });

  const handleCreate = async () => {
    try {
      // Ensure person_id is valid and exists in the person table
      if (!newTeacher.person_id) {
        console.error('Person ID is required');
        return;
      }
      await createTeacher(newTeacher); // Use createTeacher to send data
      setNewTeacher({
        specialty: '',
        teach: '',
        person_id: '' // Reset person_id
      });
      handleClose(); // Close the modal after creating
    } catch (error) {
      console.error('Error al crear el profesor:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Agregar Profesor</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="form-container-column">
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
          <input
            type="text"
            placeholder="Person ID"
            value={newTeacher.person_id}
            onChange={(e) => setNewTeacher({ ...newTeacher, person_id: e.target.value })}
          />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancelar
        </Button>
        <Button variant="primary" onClick={handleCreate}>
          Agregar Profesor
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default FormTeacher;