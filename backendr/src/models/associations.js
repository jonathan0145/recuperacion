import Person from './Person.js';
import Teacher from './Teacher.js';
import Course from './Course.js';
import Student from './Student.js';
// import StudentCourse from './StudentCourse.js';

// Define associations
Person.hasOne(Teacher, { foreignKey: 'id' });
Teacher.belongsTo(Person, { foreignKey: 'id' });

Teacher.hasMany(Course, { foreignKey: 'teachers' });
Course.belongsTo(Teacher, { foreignKey: 'id' });

Person.hasOne(Student, { foreignKey: 'id' });
Student.belongsTo(Person, { foreignKey: 'id' });

// Student.belongsToMany(Course, { through: StudentCourse, foreignKey: 'student_id' });
// Course.belongsToMany(Student, { through: StudentCourse, foreignKey: 'course_id' });

// export { Person, Teacher, Course, Student, StudentCourse };