import Person from '../models/Person.js';

// Obtener todas las personas
export const getAllPersons = async (req, res) => {
  try {
    const persons = await Person.findAll();
    res.json(persons);
    console.log(Person);
    
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener las personas' });
  }
};

// Obtener persona por ID
export const getPersonById = async (req, res) => {
  try {
    const person = await Person.findByPk(req.params.id);
    if (person) {
      res.json(person);
    } else {
      res.status(404).json({ error: 'Persona no encontrada' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener la persona' });
  }
};

// Crear una nueva persona
export const createPerson = async (req, res) => {
  try {
    const { name, first_name, last_name, document, date_of_birth, age } = req.body;
    if (!name || !first_name || !last_name || !document || !date_of_birth || age === undefined) {
      return res.status(400).json({ error: 'Todos los campos son obligatorios' });
    }

    const newPerson = await Person.create(req.body);
    res.status(201).json(newPerson);
  } catch (error) {
    console.error('Error al crear la persona:', error);
    res.status(500).json({ error: 'Error al crear la persona', details: error.message });
  }
};

// Actualizar una persona
export const updatePerson = async (req, res) => {
  try {
    const [updated] = await Person.update(req.body, {
      where: { id: req.params.id }
    });
    if (updated) {
      const updatedPerson = await Person.findByPk(req.params.id);
      res.json(updatedPerson);
    } else {
      res.status(404).json({ error: 'Persona no encontrada' });
    }
  } catch (error) {
    res.status(400).json({ error: 'Error al actualizar la persona' });
  }
};

// Eliminar una persona
export const deletePerson = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Person.destroy({
      where: { id }
    });
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'Persona no encontrada' });
    }
  } catch (error) {
    console.error('Error al eliminar la persona:', error);
    res.status(500).json({ error: 'Error al eliminar la persona', details: error.message });
  }
};