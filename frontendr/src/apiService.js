import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api', // Ensure this matches your backend's URL and port
});

export const getAllPersons = async () => api.get('/persons');
export const createPerson = async (personData) => api.post('/persons', personData);
export const updatePerson = async (id, personData) => api.put(`/persons/${id}`, personData);
export const deletePerson = async (id) => api.delete(`/persons/${id}`);

// Students
export const getAllStudents = async () => api.get('/students');
export const createStudent = async (studentData) => api.post('/students', studentData);
export const updateStudent = async (id, studentData) => api.put(`/students/${id}`, studentData);
export const deleteStudent = async (id) => api.delete(`/students/${id}`);

// Teachers
export const getAllTeachers = async () => api.get('/teachers');
export const createTeacher = async (teacherData) => api.post('/teachers', teacherData);
export const updateTeacher = async (id, teacherData) => api.put(`/teachers/${id}`, teacherData);
export const deleteTeacher = async (id) => api.delete(`/teachers/${id}`);

// Courses
export const getAllCourses = async () => api.get('/courses');
export const createCourse = async (courseData) => api.post('/courses', courseData);
export const updateCourse = async (id, courseData) => api.put(`/courses/${id}`, courseData);
export const deleteCourse = async (id) => api.delete(`/courses/${id}`);

// Student Courses
export const getAllStudentCourses = async () => api.get('/studentscourses');
export const createStudentCourse = async (studentCourseData) => api.post('/studentscourses', studentCourseData);
export const deleteStudentCourse = async (id) => api.delete(`/studentscourses/${id}`);

export const getUserProfile = async (token) => {
  return await api.get('/users/profile', {
    headers: { Authorization: `Bearer ${token}` }, // Ensure token is included
  });
};

export const registerUser = async (userData) => {
  return await api.post('/users/register', userData);
};

export const loginUser = async (credentials) => {
  return await api.post('/users/login', credentials);
};