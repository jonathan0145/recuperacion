import express from 'express';
import { getAllTeachers, getTeacherById, createTeacher, updateTeacher, deleteTeacher } from '../controllers/teacherController.js';
import { authenticateToken } from '../middleware/authMiddleware.js';

const router = express.Router();

// Rutas para personas
router.get('/', authenticateToken, getAllTeachers);
router.get('/:id', authenticateToken, getTeacherById);
router.post('/', authenticateToken, createTeacher);
router.put('/:id', authenticateToken, updateTeacher);
router.delete('/:id', authenticateToken, deleteTeacher);

export default router;