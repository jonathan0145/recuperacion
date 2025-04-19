import express from 'express';
import { getAllCourses, getCourseById, createCourse, updateCourse, deleteCourse } from '../controllers/courseController.js';
import { authenticateToken } from '../middleware/authMiddleware.js';

const router = express.Router();

// Rutas para personas
router.get('/', authenticateToken, getAllCourses);
router.get('/:id', authenticateToken, getCourseById);
router.post('/', authenticateToken, createCourse);
router.put('/:id', authenticateToken, updateCourse);
router.delete('/:id', authenticateToken, deleteCourse);

export default router;