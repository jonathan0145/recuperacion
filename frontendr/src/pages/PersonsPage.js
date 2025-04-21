import React, { useEffect, useState } from 'react';
import { getAllPersons, createPerson, deletePerson } from '../apiService'; // Add deletePerson to imports
import FormPerson from '../components/FormPerson';
import '../styles.css';

const PersonsPage = () => {
  const [persons, setPersons] = useState([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetchPersons();
  }, []);

  useEffect(() => {
    console.log("Updated persons state:", persons); // Log updated persons state
  }, [persons]);

  const fetchPersons = async () => {
    try {
      const response = await getAllPersons();
      console.log('Full response:', response); // Log the entire response
      
      const personsData = response.data || response; // Adjust this line based on actual structure
      console.log('Fetched persons:', personsData); // Debugging: Log fetched data
      setPersons(personsData || []); // Ensure it's an array
    } catch (error) {
      console.error('Error fetching persons:', error);
    }
  };

  const toggleForm = () => setShowForm(!showForm);

  const handleCreatePerson = async (personData) => {
    try {
      await createPerson(personData);
      fetchPersons(); // Refresh the list after creating a person
      toggleForm(); // Close the form
    } catch (error) {
      console.error('Error creating person:', error);
    }
  };

  const handleEdit = (person) => {
    // Logic to edit the person
    console.log('Edit person:', person);
  };

  const handleDelete = async (id) => {
    try {
      await deletePerson(id); // Call the API to delete the person
      setPersons(persons.filter(person => person.id !== id)); // Update state to remove the person
      console.log(`Deleted person with id: ${id}`);
    } catch (error) {
      console.error('Error deleting person:', error);
    }
  };

  return (
    <div className="page-container">
      <h1 className="page-title">Person Management</h1>
      <FormPerson show={showForm} handleClose={toggleForm} onPersonCreated={handleCreatePerson} />
      <button onClick={toggleForm}>Create</button>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {persons.length > 0 ? (
            persons.map((person, index) => {
              console.log('Person object:', person); // Log each person object
              console.log(`Row created for person with ID: ${person.id}`); // Log row creation
              return (
                <tr key={person.id || index}>
                  <td>{person.id}</td>
                  <td>{person.name}</td> {/* Ensure 'name' is the correct property */}
                  <td>
                    <button onClick={() => handleEdit(person)}>Edit</button>
                    <button onClick={() => handleDelete(person.id)}>Delete</button>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan="3">No persons available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default PersonsPage;