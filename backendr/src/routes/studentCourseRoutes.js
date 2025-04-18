import express from 'express';
import { getAllStudentCourses, getStudentCourseById, createStudentCourse, updateStudentCourse, deleteStudentCourse } from '../controllers/studentCourseController.js';

const router = express.Router();

// Rutas para personas
router.get('/', getAllStudentCourses);
router.get('/:id', getStudentCourseById);
router.post('/', createStudentCourse);
router.put('/:id', updateStudentCourse);
router.delete('/:id', deleteStudentCourse);

export default router;