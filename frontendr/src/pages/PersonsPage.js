import React, { useEffect, useState } from 'react';
import { getAllPersons, createPerson } from '../apiService';
import TableComponent from '../components/TableComponent';
import '../styles.css'; // Asegúrate de que este archivo CSS esté importado

const PersonsPage = () => {
  const [persons, setPersons] = useState([]);
  const [newPerson, setNewPerson] = useState({
    name: '',
    first_name: '',
    last_name: '',
    document: '',
    date_of_birth: '',
    age: ''
  });

  useEffect(() => {
    fetchPersons();
  }, []);

  const fetchPersons = async () => {
    try {
      const response = await getAllPersons();
      setPersons(response.data);
    } catch (error) {
      console.error('Error al obtener las personas:', error);
    }
  };

  const handleCreate = async () => {
    try {
      if (newPerson.name && newPerson.first_name && newPerson.last_name) { // Verifica campos requeridos
        const response = await createPerson(newPerson);
        if (response.status === 201) { // Verifica que la respuesta sea exitosa
          fetchPersons(); // Actualiza la lista después de crear
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
    <div className="page-container"> {/* Asegúrate de que esta clase esté aplicada */}
      <h1 className="page-title">Panel de Personas</h1>
      <p className="page-description">Administra los datos de las personas aquí.</p>
      <div className="form-container">
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
        <button onClick={handleCreate}>Agregar Persona</button>
      </div>
      <TableComponent data={persons} />
    </div>
  );
};

export default PersonsPage;