import React, { useEffect, useState } from 'react';
import { getAllPersons, createPerson, updatePerson, deletePerson } from '../apiService';
import '../styles.css'; // Import styles for dashboard

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
      console.error('Error fetching persons:', error);
    }
  };

  const handleCreate = async () => {
    try {
      await createPerson(newPerson);
      fetchPersons();
    } catch (error) {
      console.error('Error creating person:', error);
    }
  };

  const handleUpdate = async (id) => {
    try {
      await updatePerson(id, newPerson);
      fetchPersons();
    } catch (error) {
      console.error('Error updating person:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deletePerson(id);
      fetchPersons();
    } catch (error) {
      console.error('Error deleting person:', error);
    }
  };

  return (
    <div className="dashboard-container">
      <h1>Persons Dashboard</h1>
      <div className="form-container">
        <input
          type="text"
          placeholder="Name"
          value={newPerson.name}
          onChange={(e) => setNewPerson({ ...newPerson, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="First Name"
          value={newPerson.first_name}
          onChange={(e) => setNewPerson({ ...newPerson, first_name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Last Name"
          value={newPerson.last_name}
          onChange={(e) => setNewPerson({ ...newPerson, last_name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Document"
          value={newPerson.document}
          onChange={(e) => setNewPerson({ ...newPerson, document: e.target.value })}
        />
        <input
          type="date"
          placeholder="Date of Birth"
          value={newPerson.date_of_birth}
          onChange={(e) => setNewPerson({ ...newPerson, date_of_birth: e.target.value })}
        />
        <input
          type="number"
          placeholder="Age"
          value={newPerson.age}
          onChange={(e) => setNewPerson({ ...newPerson, age: e.target.value })}
        />
        <button onClick={handleCreate}>Add Person</button>
      </div>
      <table className="persons-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Document</th>
            <th>Date of Birth</th>
            <th>Age</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {persons.map((person) => (
            <tr key={person.id}>
              <td>{person.name}</td>
              <td>{person.first_name}</td>
              <td>{person.last_name}</td>
              <td>{person.document}</td>
              <td>{person.date_of_birth}</td>
              <td>{person.age}</td>
              <td>
                <button onClick={() => handleUpdate(person.id)}>Update</button>
                <button onClick={() => handleDelete(person.id)}>Delete</button>
                <button onClick={() => alert(`Displaying ${person.name}`)}>Display</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PersonsPage;