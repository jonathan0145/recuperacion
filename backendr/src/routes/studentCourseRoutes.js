import express from 'express';
import { getAllStudentCourses, getStudentCourseById, createStudentCourse, deleteStudentCourse } from '../controllers/studentCourseController.js';
import { authenticateToken } from '../middleware/authMiddleware.js';

const router = express.Router();

// Rutas para StudentCourse
router.get('/', authenticateToken, getAllStudentCourses);
router.get('/:student_id/:course_id', authenticateToken, getStudentCourseById);
router.post('/', authenticateToken, createStudentCourse);
router.delete('/:student_id/:course_id', authenticateToken, deleteStudentCourse);

export default router;