import express from 'express';
import { getAllStudents, getStudentById, createStudent, updateStudent, deleteStudent } from '../controllers/studentController.js';

const router = express.Router();

// Rutas para personas
router.get('/', getAllStudents);
router.get('/:id', getStudentById);
router.post('/', createStudent);
router.put('/:id', updateStudent);
router.delete('/:id', deleteStudent);

export default router;