import Course from '../models/Course.js';

// Obtener todas las personas
export const getAllCourses = async (req, res) => {
    try {
        const courses = await Course.findAll();
        res.json(courses);
        console.log(Course);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los cursos' });
    }
};

// Obtener persona por ID
export const getCourseById = async (req, res) => {
    try {
        const course = await Course.findByPk(req.params.id);
        if (course) {
            res.json(course);
        } else {
            res.status(404).json({ error: 'curso no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener la curso' });
    }
};

// Crear una nueva persona
export const createCourse = async (req, res) => {
    try {
        const { name, credits, schedule, level, start_date, end_date, capacity, teachers } = req.body;
        if (!name || !credits || !schedule || !level || !start_date || !end_date, !capacity, !teachers) {
            return res.status(400).json({ error: 'Todos los campos son obligatorios' });
        }
        const newCourse = await Course.create(req.body);
        res.status(201).json(newCourse);
    } catch (error) {
        console.error('Error al crear el curso:', error);
        res.status(500).json({ error: 'Error al crear el curso', details: error.message });
    }
};

// Actualizar una persona
export const updateCourse = async (req, res) => {
    try {
        const [updated] = await Course.update(req.body, {
            where: { id: req.params.id }
        });
        if (updated) {
            const updatedCourse = await Course.findByPk(req.params.id);
            res.json(updatedCourse);
        } else {
            res.status(404).json({ error: 'curso no encontrado' });
        }
    } catch (error) {
        res.status(400).json({ error: 'Error al actualizar el curso' });
    }
};

// Eliminar una persona
export const deleteCourse = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Course.destroy({
            where: { id }
        });
        if (deleted) {
            res.status(204).send();
        } else {
            res.status(404).json({ error: 'curso no encontrado' });
        }
    } catch (error) {
        console.error('Error al eliminar el curso:', error);
        res.status(500).json({ error: 'Error al eliminar el curso', details: error.message });
    }
};