import StudentCourse from '../models/StudentCourse.js';

// Obtener todos los registros de StudentCourse
export const getAllStudentCourses = async (req, res) => {
    try {
        const studentCourses = await StudentCourse.findAll();
        res.json(studentCourses);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener studentcourse' });
    }
};

// Obtener un registro de StudentCourse por IDs
export const getStudentCourseById = async (req, res) => {
    try {
        const { student_id, course_id } = req.params;
        const studentCourse = await StudentCourse.findOne({
            where: { student_id, course_id }
        });
        if (studentCourse) {
            res.json(studentCourse);
        } else {
            res.status(404).json({ error: 'studentCourse no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener al studentCourse' });
    }
};

// Crear un nuevo registro de StudentCourse
export const createStudentCourse = async (req, res) => {
    try {
        const { student_id, course_id } = req.body;
        if (!student_id || !course_id) {
            return res.status(400).json({ error: 'Todos los campos son obligatorios' });
        }

        const newStudentCourse = await StudentCourse.create({ student_id, course_id });
        res.status(201).json(newStudentCourse);
    } catch (error) {
        console.error('Error al crear studentcourse:', error);
        res.status(500).json({ error: 'Error al crear studentcourse', details: error.message });
    }
};

// Eliminar un registro de StudentCourse
export const deleteStudentCourse = async (req, res) => {
    try {
        const { student_id, course_id } = req.params;
        const deleted = await StudentCourse.destroy({
            where: { student_id, course_id }
        });
        if (deleted) {
            res.status(204).send();
        } else {
            res.status(404).json({ error: 'studentcourse no encontrado' });
        }
    } catch (error) {
        console.error('Error al eliminar studentcourse:', error);
        res.status(500).json({ error: 'Error al eliminar studentcourse', details: error.message });
    }
};