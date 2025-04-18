import express from 'express';
import sequelize from '../config/database.js';
import './models/associations.js';
import personRoutes from './routes/personRoutes.js';
import studentRoutes from './routes/studentRoutes.js';
import teacherRoutes from './routes/teacherRoutes.js';
import courseRoutes from './routes/courseRoutes.js';
import studentCourseRoutes from './routes/studentCourseRoutes.js'

const app = express();

app.use(express.json());

// Test database connection
sequelize.authenticate()
    .then(() => {
        console.log('La conexión a la base de datos se ha establecido correctamente.');
    })
    .catch(err => {
        console.error('No se puede conectar a la base de datos:', err);
    });

 // Define routes
app.get('/', (req, res) => {
    res.send('Bienvenido a la API');
});

// Use person routes
app.use('/api/persons', personRoutes);
app.use('/api/students', studentRoutes);
app.use('/api/teachers', teacherRoutes);
app.use('/api/courses', courseRoutes);
app.use('/api/studentscourses', studentCourseRoutes);

// ... define other routes ...

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`El servidor se está ejecutando en el puerto ${PORT}.`);
});

export default app;