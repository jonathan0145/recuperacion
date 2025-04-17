import app from './src/app.js';
import sequelize from './config/database.js';

sequelize.authenticate()
  .then(() => {
    console.log('La conexión se ha establecido correctamente.');
  })
  .catch(err => {
    console.error('No se puede conectar a la base de datos:', err);
  });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`El servidor se está ejecutando en el puerto ${PORT}.`);
});