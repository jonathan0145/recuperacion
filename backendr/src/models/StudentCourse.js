import { DataTypes } from 'sequelize';
import sequelize from '../../config/database.js';
import Student from './Student.js';
import Course from './Course.js';

const StudentCourse = sequelize.define('StudentCourse', {
  student_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    references: {
      model: Student,
      key: 'id',
    },
  },
  course_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    references: {
      model: Course,
      key: 'id',
    },
  },
}, {
  timestamps: false,
});

export default StudentCourse;