import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api', // Ensure this URL matches the backend
});

export const getAllPersons = async () => {
  try {
    const token = localStorage.getItem('token'); // Obtain the token from local storage
    if (!token) {
      throw new Error('No token found. Please log in.');
    }
    const response = await api.get('/persons', {
      headers: {
        Authorization: `Bearer ${token}` // Include the token in the header
      }
    });
    if (!response.data) {
      throw new Error('No data received from the server.');
    }
    return response.data; // Ensure the data is returned correctly
  } catch (error) {
    console.error('Error fetching persons:', error.response ? error.response.data : error.message);
    throw error;
  }
};
export const createPerson = async (personData) => {
  try {
    const token = localStorage.getItem('token'); // Obtén el token del almacenamiento local
    const response = await api.post('/persons', personData, {
      headers: {
        Authorization: `Bearer ${token}` // Incluye el token en el encabezado
      }
    });
    return response;
  } catch (error) {
    console.error('Error al crear la persona:', error);
    throw error;
  }
};
export const updatePerson = async (id, personData) => api.put(`/persons/${id}`, personData);
export const deletePerson = async (id) => {
  try {
    const token = localStorage.getItem('token'); // Obtain the token from local storage
    if (!token) {
      throw new Error('No token found. Please log in.');
    }
    const response = await api.delete(`/persons/${id}`, {
      headers: {
        Authorization: `Bearer ${token}` // Include the token in the header
      }
    });
    console.log(`Person with id ${id} deleted successfully.`);
    return response;
  } catch (error) {
    console.error('Error deleting person:', error.response ? error.response.data : error.message);
    throw error;
  }
};

// Estudiantes
export const getAllStudents = async () => {
  try {
    const token = localStorage.getItem('token'); // Obtain the token from local storage
    if (!token) {
      throw new Error('No token found. Please log in.');
    }
    const response = await api.get('/students', {
      headers: {
        Authorization: `Bearer ${token}` // Include the token in the header
      }
    });
    if (!response.data) {
      throw new Error('No data received from the server.');
    }
    return response.data; // Ensure the data is returned correctly
  } catch (error) {
    console.error('Error fetching students:', error.response ? error.response.data : error.message);
    throw error;
  }
};

export const createStudent = async (studentData) => {
  try {
    const token = localStorage.getItem('token'); // Obtain the token from local storage
    if (!token) {
      throw new Error('No token found. Please log in.');
    }
    const response = await api.post('/students', studentData, {
      headers: {
        Authorization: `Bearer ${token}` // Include the token in the header
      }
    });
    return response;
  } catch (error) {
    console.error('Error creating student:', error.response ? error.response.data : error.message);
    throw error;
  }
};

export const deleteStudent = async (id) => {
  try {
    const token = localStorage.getItem('token'); // Obtain the token from local storage
    if (!token) {
      throw new Error('No token found. Please log in.');
    }
    const response = await api.delete(`/students/${id}`, {
      headers: {
        Authorization: `Bearer ${token}` // Include the token in the header
      }
    });
    console.log(`Student with id ${id} deleted successfully.`);
    return response;
  } catch (error) {
    console.error('Error deleting student:', error.response ? error.response.data : error.message);
    throw error;
  }
};

// Profesores
export const getAllTeachers = async () => {
  try {
    const token = localStorage.getItem('token'); // Obtain the token from local storage
    if (!token) {
      throw new Error('No token found. Please log in.');
    }
    const response = await api.get('/teachers', {
      headers: {
        Authorization: `Bearer ${token}` // Include the token in the header
      }
    });
    if (!response.data) {
      throw new Error('No data received from the server.');
    }
    return response.data; // Ensure the data is returned correctly
  } catch (error) {
    console.error('Error fetching teachers:', error.response ? error.response.data : error.message);
    throw error;
  }
};

export const createTeacher = async (teacherData) => {
  try {
    const token = localStorage.getItem('token'); // Obtain the token from local storage
    if (!token) {
      throw new Error('No token found. Please log in.');
    }
    const response = await api.post('/teachers', teacherData, {
      headers: {
        Authorization: `Bearer ${token}` // Include the token in the header
      }
    });
    return response;
  } catch (error) {
    console.error('Error creating teacher:', error.response ? error.response.data : error.message);
    throw error;
  }
};

export const deleteTeacher = async (id) => {
  try {
    const token = localStorage.getItem('token'); // Obtain the token from local storage
    if (!token) {
      throw new Error('No token found. Please log in.');
    }
    console.log(`Attempting to delete teacher with id: ${id}`); // Log the id being deleted
    const response = await api.delete(`/teachers/${id}`, {
      headers: {
        Authorization: `Bearer ${token}` // Include the token in the header
      }
    });
    console.log(`Teacher with id ${id} deleted successfully.`);
    return response;
  } catch (error) {
    console.error('Error deleting teacher:', error.response ? error.response.data : error.message);
    throw error;
  }
};

export const deleteCourse = async (id) => {
  try {
    const token = localStorage.getItem('token'); // Obtain the token from local storage
    if (!token) {
      throw new Error('No token found. Please log in.');
    }
    const response = await api.delete(`/courses/${id}`, {
      headers: {
        Authorization: `Bearer ${token}` // Include the token in the header
      }
    });
    console.log(`Course with id ${id} deleted successfully.`);
    return response;
  } catch (error) {
    console.error('Error deleting course:', error.response ? error.response.data : error.message);
    throw error;
  }
};

export const deleteStudentCourse = async (studentId, courseId) => {
  try {
    const token = localStorage.getItem('token'); // Obtain the token from local storage
    if (!token) {
      throw new Error('No token found. Please log in.');
    }
    console.log(`Attempting to delete student course with studentId: ${studentId} and courseId: ${courseId}`); // Log the ids being deleted
    const response = await api.delete(`/studentscourses/${studentId}/${courseId}`, { // Adjust the endpoint to include both IDs
      headers: {
        Authorization: `Bearer ${token}` // Include the token in the header
      }
    });
    console.log(`Student course with studentId: ${studentId} and courseId: ${courseId} deleted successfully.`);
    return response;
  } catch (error) {
    console.error('Error deleting student course:', error.response ? error.response.data : error.message);
    throw error;
  }
};

// Cursos
export const getAllCourses = async () => {
  try {
    const token = localStorage.getItem('token'); // Obtain the token from local storage
    if (!token) {
      throw new Error('No token found. Please log in.');
    }
    const response = await api.get('/courses', {
      headers: {
        Authorization: `Bearer ${token}` // Include the token in the header
      }
    });
    if (!response.data) {
      throw new Error('No data received from the server.');
    }
    return response.data; // Ensure the data is returned correctly
  } catch (error) {
    console.error('Error fetching courses:', error.response ? error.response.data : error.message);
    throw error;
  }
};

export const createCourse = async (courseData) => {
  try {
    const token = localStorage.getItem('token'); // Obtain the token from local storage
    if (!token) {
      throw new Error('No token found. Please log in.');
    }
    const response = await api.post('/courses', courseData, {
      headers: {
        Authorization: `Bearer ${token}` // Include the token in the header
      }
    });
    return response;
  } catch (error) {
    console.error('Error creating course:', error.response ? error.response.data : error.message);
    throw error;
  }
};

// Cursos de Estudiantes
export const getAllStudentCourses = async () => {
  try {
    const token = localStorage.getItem('token'); // Obtain the token from local storage
    if (!token) {
      throw new Error('No token found. Please log in.');
    }
    const response = await api.get('/studentscourses', {
      headers: {
        Authorization: `Bearer ${token}` // Include the token in the header
      }
    });
    if (!response.data) {
      throw new Error('No data received from the server.');
    }
    return response.data; // Ensure the data is returned correctly
  } catch (error) {
    console.error('Error fetching student courses:', error.response ? error.response.data : error.message);
    throw error;
  }
};

export const createStudentCourse = async (studentCourseData) => {
  try {
    const token = localStorage.getItem('token'); // Obtain the token from local storage
    if (!token) {
      throw new Error('No token found. Please log in.');
    }
    const response = await api.post('/studentscourses', studentCourseData, {
      headers: {
        Authorization: `Bearer ${token}` // Include the token in the header
      }
    });
    return response;
  } catch (error) {
    console.error('Error creating student course:', error.response ? error.response.data : error.message);
    throw error;
  }
};

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