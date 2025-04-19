import express from 'express';
import { getAllPersons, getPersonById, createPerson, updatePerson, deletePerson } from '../controllers/personController.js';
import { authenticateToken } from '../middleware/authMiddleware.js';

const router = express.Router();

// Rutas para personas
router.get('/', authenticateToken, getAllPersons);
router.get('/:id', authenticateToken, getPersonById);
router.post('/', authenticateToken, createPerson);
router.put('/:id', authenticateToken, updatePerson);
router.delete('/:id', authenticateToken, deletePerson);

export default router;