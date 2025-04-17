import { DataTypes } from 'sequelize';
import sequelize from '../../config/database.js';
import Person from './Person.js';

const Student = sequelize.define('Student', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    references: {
      model: Person,
      key: 'id',
    },
  },
  email: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  enrollment_date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  student_status: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  grade_level: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
}, {
  timestamps: false,
});

export default Student;