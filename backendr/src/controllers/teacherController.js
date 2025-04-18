import Teacher from '../models/Teacher.js';

// Obtener todas las personas
export const getAllTeachers = async (req, res) => {
    try {
        const teachers = await Teacher.findAll();
        res.json(teachers);
        console.log(Teacher);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los profesores' });
    }
};

// Obtener persona por ID
export const getTeacherById = async (req, res) => {
    try {
        const teacher = await Teacher.findByPk(req.params.id);
        if (teacher) {
            res.json(teacher);
        } else {
            res.status(404).json({ error: 'profesor no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener al profesor' });
    }
};

// Crear una nueva persona
export const createTeacher = async (req, res) => {
    try {
        const { specialty, teach} = req.body;
        if (!specialty || !teach) {
            return res.status(400).json({ error: 'Todos los campos son obligatorios' });
        }
        const newTeacher = await Teacher.create(req.body);
        res.status(201).json(newTeacher);
    } catch (error) {
        console.error('Error al crear al profesor:', error);
        res.status(500).json({ error: 'Error al crear al profesor', details: error.message });
    }
};

// Actualizar una persona
export const updateTeacher = async (req, res) => {
    try {
        const [updated] = await Teacher.update(req.body, {
            where: { id: req.params.id }
        });
        if (updated) {
            const updatedTeacher = await Teacher.findByPk(req.params.id);
            res.json(updatedTeacher);
        } else {
            res.status(404).json({ error: 'estudiante no profesor' });
        }
    } catch (error) {
        res.status(400).json({ error: 'Error al actualizar la profesor' });
    }
};

  // Eliminar una persona
export const deleteTeacher = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Teacher.destroy({
            where: { id }
        });
        if (deleted) {
            res.status(204).send();
        } else {
            res.status(404).json({ error: 'profesor no encontrada' });
        }
    } catch (error) {
        console.error('Error al eliminar al profesor:', error);
        res.status(500).json({ error: 'Error al eliminar al profesor', details: error.message });
    }
};