// import StudentCourse from '../models/StudentCourse.js';

// // Obtener todas las personas
// export const getAllStudentCourses = async (req, res) => {
//   try {
//     const studentcourses = await StudentCourse.findAll();
//     res.json(studentcourses);
//     console.log(StudentCourse);
    
//   } catch (error) {
//     res.status(500).json({ error: 'Error al obtener studentcourse' });
//   }
// };

// // Obtener persona por ID
// export const getStudentCourseById = async (req, res) => {
//   try {
//     const studentCourse = await StudentCourse.findByPk(req.params.id);
//     if (studentCourse) {
//       res.json(studentCourse);
//     } else {
//       res.status(404).json({ error: 'studentCourse no encontrado' });
//     }
//   } catch (error) {
//     res.status(500).json({ error: 'Error al obtener al studentCourse' });
//   }
// };

// // Crear una nueva persona
// export const createStudentCourse = async (req, res) => {
//   try {
//     const { name, first_name, last_name, document, date_of_birth, age } = req.body;
//     if (!name || !first_name || !last_name || !document || !date_of_birth || age === undefined) {
//       return res.status(400).json({ error: 'Todos los campos son obligatorios' });
//     }

//     const newStudentCourse = await StudentCourse.create(req.body);
//     res.status(201).json(newStudentCourse);
//   } catch (error) {
//     console.error('Error al crear studentcourse:', error);
//     res.status(500).json({ error: 'Error al crear studentcourse', details: error.message });
//   }
// };

// // Actualizar una persona
// export const updateStudentCourse = async (req, res) => {
//   try {
//     const [updated] = await StudentCourse.update(req.body, {
//       where: { id: req.params.id }
//     });
//     if (updated) {
//       const updatedStudentCourse = await StudentCourse.findByPk(req.params.id);
//       res.json(updatedStudentCourse);
//     } else {
//       res.status(404).json({ error: 'studentcourse no encontrado' });
//     }
//   } catch (error) {
//     res.status(400).json({ error: 'Error al actualizar studentcourse' });
//   }
// };

// // Eliminar una persona
// export const deletePerson = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const deleted = await StudentCourse.destroy({
//       where: { id }
//     });
//     if (deleted) {
//       res.status(204).send();
//     } else {
//       res.status(404).json({ error: 'studentcourse no encontrado' });
//     }
//   } catch (error) {
//     console.error('Error al eliminar studentcourse:', error);
//     res.status(500).json({ error: 'Error al eliminar studentcourse', details: error.message });
//   }
// };