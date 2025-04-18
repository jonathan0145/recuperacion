import express from 'express';
import { getAllCourses, getCourseById, createCourse, updateCourse, deleteCourse } from '../controllers/courseController.js';

const router = express.Router();

// Rutas para personas
router.get('/', getAllCourses);
router.get('/:id', getCourseById);
router.post('/', createCourse);
router.put('/:id', updateCourse);
router.delete('/:id', deleteCourse);

export default router;