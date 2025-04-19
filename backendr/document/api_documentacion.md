
## Endpoints

### Persona

- **GET** `/persons` - Obtener todas las personas.
  - **Ejemplo de Solicitud:** `GET http://localhost:3000/api/persons`
- **GET** `/persons/:id` - Obtener una persona por ID.
  - **Ejemplo de Solicitud:** `GET http://localhost:3000/api/persons/3`
- **POST** `/persons` - Crear una nueva persona.
  - **Ejemplo de Solicitud:**
    ```json
    {
        "name": "dayana rendon1",
        "first_name": "dayana",
        "last_name": "rendon1",
        "document": "159623847",
        "date_of_birth": "2021-05-29",
        "age": "23"
    }
    ```
- **PUT** `/persons/:id` - Actualizar una persona por ID.
  - **Ejemplo de Solicitud:**
    ```json
    {
        "name": "jonathan rendon1",
        "first_name": "jonathan",
        "last_name": "rendon1",
        "document": "3216549872",
        "date_of_birth": "1980-01-01",
        "age": 26
    }
    ```
- **DELETE** `/persons/:id` - Eliminar una persona por ID.
  - **Ejemplo de Solicitud:** `DELETE http://localhost:3000/api/persons/2`

### Estudiante

- **GET** `/students` - Obtener todos los estudiantes.
  - **Ejemplo de Solicitud:** `GET http://localhost:3000/api/students`
- **GET** `/students/:id` - Obtener un estudiante por ID.
  - **Ejemplo de Solicitud:** `GET http://localhost:3000/api/students/1`
- **POST** `/students` - Crear un nuevo estudiante.
  - **Ejemplo de Solicitud:**
    ```json
    {
        "id": "6",
        "email": "dayana.rendon1@ejemplo.com",
        "enrollment_date": "2024-05-21",
        "student_status": "Activo",
        "grade_level": "Onceavo año"
    }
    ```
- **PUT** `/students/:id` - Actualizar un estudiante por ID.
  - **Ejemplo de Solicitud:**
    ```json
    {
        "email": "jonathan.rendon@ejemplo.com",
        "enrollment_date": "2023-05-21",
        "student_status": "Activo",
        "grade_level": "Tercer año"
    }
    ```
- **DELETE** `/students/:id` - Eliminar un estudiante por ID.
  - **Ejemplo de Solicitud:** `DELETE http://localhost:3000/api/students/2`

### Profesor

- **GET** `/teachers` - Obtener todos los profesores.
  - **Ejemplo de Solicitud:** `GET http://localhost:3000/api/teachers`
- **GET** `/teachers/:id` - Obtener un profesor por ID.
  - **Ejemplo de Solicitud:** `GET http://localhost:3000/api/teachers/1`
- **POST** `/teachers` - Crear un nuevo profesor.
  - **Ejemplo de Solicitud:**
    ```json
    {
        "id": "5",
        "specialty": "quimica",
        "teach": "enseña tabla periodica"
    }
    ```
- **PUT** `/teachers/:id` - Actualizar un profesor por ID.
  - **Ejemplo de Solicitud:**
    ```json
    {
        "id": 1,
        "specialty": "ingles",
        "teach": "Enseña idiomas en especial ingles"
    }
    ```
- **DELETE** `/teachers/:id` - Eliminar un profesor por ID.
  - **Ejemplo de Solicitud:** `DELETE http://localhost:3000/api/teachers/2`

### Curso

- **GET** `/courses` - Obtener todos los cursos.
  - **Ejemplo de Solicitud:** `GET http://localhost:3000/api/courses`
- **GET** `/courses/:id` - Obtener un curso por ID.
  - **Ejemplo de Solicitud:** `GET http://localhost:3000/api/courses/1`
- **POST** `/courses` - Crear un nuevo curso.
  - **Ejemplo de Solicitud:**
    ```json
    {
        "id": 6,
        "name": "se enseña quimica",
        "credits": 4,
        "schedule": "Lunes, Miércoles, Viernes 10:00-11:00",
        "level": "Pregrado",
        "start_date": "2023-09-01",
        "end_date": "2023-12-15",
        "capacity": 32,
        "teachers": 2
    }
    ```
- **PUT** `/courses/:id` - Actualizar un curso por ID.
  - **Ejemplo de Solicitud:**
    ```json
    {
        "id": 2,
        "name": "preparacion para la sociedad y preparaciones",
        "credits": 4,
        "schedule": "Lunes, Miércoles, Viernes 10:00-11:00",
        "level": "Pregrado",
        "start_date": "2023-09-01",
        "end_date": "2023-12-15",
        "capacity": 32,
        "teachers": 2
    }
    ```
- **DELETE** `/courses/:id` - Eliminar un curso por ID.
  - **Ejemplo de Solicitud:** `DELETE http://localhost:3000/api/courses/2`

### Curso de Estudiante

- **GET** `/studentscourses` - Obtener todos los cursos de estudiantes.
  - **Ejemplo de Solicitud:** `GET http://localhost:3000/api/studentscourses`
- **GET** `/studentscourses/:student_id/:course_id` - Obtener un curso de estudiante por IDs.
  - **Ejemplo de Solicitud:** `GET http://localhost:3000/api/studentscourses/1/1`
- **POST** `/studentscourses` - Crear un nuevo curso de estudiante.
  - **Ejemplo de Solicitud:**
    ```json
    {
        "student_id": 1,
        "course_id": 2
    }
    ```
- **DELETE** `/studentscourses/:student_id/:course_id` - Eliminar un curso de estudiante por IDs.
  - **Ejemplo de Solicitud:** `DELETE http://localhost:3000/api/studentscourses/1/5`

### Usuario

- **GET** `/users/profile` - Obtener perfil de usuario (requiere Token Bearer).
  - **Ejemplo de Solicitud:** `GET http://localhost:3000/api/users/profile`
  - **Autorización:** Token Bearer
- **POST** `/users/register` - Registrar un nuevo usuario.
  - **Ejemplo de Solicitud:**
    ```json
    {
        "username": "jonathan0145",
        "email": "jonathan0145@ejemplo.com",
        "password": "3216417337"
    }
    ```
- **POST** `/users/login` - Iniciar sesión de usuario.
  - **Ejemplo de Solicitud:**
    ```json
    {
        "email": "jonathan0145@ejemplo.com",
        "password": "3216417337"
    }
    ```

## Autorización

Para los endpoints que requieren autorización, incluye un Token Bearer en los encabezados de la solicitud.