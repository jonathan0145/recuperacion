import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { createPerson } from '../apiService';
import '../styles.css';

const FormPerson = ({ show, handleClose, onPersonCreated }) => {
  const [newPerson, setNewPerson] = useState({
    name: '',
    first_name: '',
    last_name: '',
    document: '',
    date_of_birth: '',
    age: ''
  });

  const handleCreate = async () => {
    try {
      console.log('Datos a enviar:', newPerson); // Verifica los datos antes de enviarlos
      if (newPerson.name && newPerson.first_name && newPerson.last_name && newPerson.document && newPerson.date_of_birth && newPerson.age) {
        const response = await createPerson(newPerson);
        if (response.status === 201) {
          onPersonCreated();
          setNewPerson({
            name: '',
            first_name: '',
            last_name: '',
            document: '',
            date_of_birth: '',
            age: ''
          });
          handleClose(); // Cierra el modal después de crear
        } else {
          console.error('Error al crear la persona:', response.statusText);
        }
      } else {
        console.error('Por favor, completa todos los campos requeridos.');
      }
    } catch (error) {
      console.error('Error al crear la persona:', error);
    }
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Agregar Persona</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="form-container-column"> {/* Cambia la clase aquí */}
          <input
            type="text"
            placeholder="Nombre"
            value={newPerson.name}
            onChange={(e) => setNewPerson({ ...newPerson, name: e.target.value })}
          />
          <input
            type="text"
            placeholder="Primer Nombre"
            value={newPerson.first_name}
            onChange={(e) => setNewPerson({ ...newPerson, first_name: e.target.value })}
          />
          <input
            type="text"
            placeholder="Apellido"
            value={newPerson.last_name}
            onChange={(e) => setNewPerson({ ...newPerson, last_name: e.target.value })}
          />
          <input
            type="text"
            placeholder="Documento"
            value={newPerson.document}
            onChange={(e) => setNewPerson({ ...newPerson, document: e.target.value })}
          />
          <input
            type="date"
            placeholder="Fecha de Nacimiento"
            value={newPerson.date_of_birth}
            onChange={(e) => setNewPerson({ ...newPerson, date_of_birth: e.target.value })}
          />
          <input
            type="number"
            placeholder="Edad"
            value={newPerson.age}
            onChange={(e) => setNewPerson({ ...newPerson, age: e.target.value })}
          />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancelar
        </Button>
        <Button variant="primary" onClick={handleCreate}>
          Agregar Persona
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default FormPerson;