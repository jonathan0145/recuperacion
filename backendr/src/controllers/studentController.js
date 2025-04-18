import Student from '../models/Student.js';

// Obtener todas las personas
export const getAllStudents = async (req, res) => {
    try {
      const students = await Student.findAll();
      res.json(students);
      console.log(Student);
      
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener los estudiantes' });
    }
  };
  
  // Obtener persona por ID
  export const getStudentById = async (req, res) => {
    try {
      const student = await Student.findByPk(req.params.id);
      if (student) {
        res.json(student);
      } else {
        res.status(404).json({ error: 'estudiante no encontrada' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener al estudiante' });
    }
  };
  
  // Crear una nueva persona
  export const createStudent = async (req, res) => {
    try {
      const { email, enrollment_date, student_status, grade_level} = req.body;
      if (!email || !enrollment_date || !student_status || !grade_level) {
        return res.status(400).json({ error: 'Todos los campos son obligatorios' });
      }
  
      const newStudent = await Student.create(req.body);
      res.status(201).json(newStudent);
    } catch (error) {
      console.error('Error al crear al estudiante:', error);
      res.status(500).json({ error: 'Error al crear al estudiante', details: error.message });
    }
  };
  
  // Actualizar una persona
  export const updateStudent = async (req, res) => {
    try {
      const [updated] = await Person.update(req.body, {
        where: { id: req.params.id }
      });
      if (updated) {
        const updatedStudent = await Student.findByPk(req.params.id);
        res.json(updatedStudent);
      } else {
        res.status(404).json({ error: 'estudiante no encontrada' });
      }
    } catch (error) {
      res.status(400).json({ error: 'Error al actualizar la estudiante' });
    }
  };
  
  // Eliminar una persona
  export const deleteStudent = async (req, res) => {
    try {
      const { id } = req.params;
      const deleted = await Student.destroy({
        where: { id }
      });
      if (deleted) {
        res.status(204).send();
      } else {
        res.status(404).json({ error: 'estudiante no encontrada' });
      }
    } catch (error) {
      console.error('Error al eliminar al estudiante:', error);
      res.status(500).json({ error: 'Error al eliminar al estudiante', details: error.message });
    }
  };