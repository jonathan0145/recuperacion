import { DataTypes } from 'sequelize';
import sequelize from '../../config/database.js';

const Person = sequelize.define('Person', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING(100),
    allowNull: true, // Permitir NULL
    defaultValue: null, // Valor por defecto NULL
  },
  first_name: {
    type: DataTypes.STRING(100),
    allowNull: true, // Permitir NULL
    defaultValue: null, // Valor por defecto NULL
  },
  last_name: {
    type: DataTypes.STRING(100),
    allowNull: true, // Permitir NULL
    defaultValue: null, // Valor por defecto NULL
  },
  document: {
    type: DataTypes.STRING(50),
    allowNull: true, // Permitir NULL
    defaultValue: null, // Valor por defecto NULL
  },
  date_of_birth: {
    type: DataTypes.DATE,
    allowNull: true, // Permitir NULL
    defaultValue: null, // Valor por defecto NULL
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: true, // Permitir NULL
    defaultValue: null, // Valor por defecto NULL
  },
}, {
  timestamps: false,
  tableName: 'person',
});

export default Person;