-- Elimina las tablas existentes para empezar de cero. ¡Útil para el desarrollo, pero elimínalo en producción!
DROP TABLE IF EXISTS Student;
DROP TABLE IF EXISTS Course;
DROP TABLE IF EXISTS Teacher;
DROP TABLE IF EXISTS Person;

CREATE TABLE Person (
    id INT PRIMARY KEY,
    name VARCHAR(100),
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    document VARCHAR(50),
    date_of_birth DATE,
    age INT
);

-- Crear la tabla Teacher
CREATE TABLE Teacher (
    id INT PRIMARY KEY,
    specialty VARCHAR(100),
    teach VARCHAR(255),
    FOREIGN KEY (id) REFERENCES Person(id)
);

-- Crear la tabla Course
CREATE TABLE Course (
    id INT PRIMARY KEY,
    name VARCHAR(100),
    credits INT,
    schedule VARCHAR(100),
    level VARCHAR(50),
    start_date DATE,
    end_date DATE,
    capacity INT,
    teacher INT,
    FOREIGN KEY (teacher) REFERENCES Teacher(id)
);

-- Crear la tabla Student
CREATE TABLE Student (
    id INT PRIMARY KEY,
    email VARCHAR(255),
    enrollment_date DATE,
    student_status VARCHAR(50),
    grade_level VARCHAR(50),
    FOREIGN KEY (id) REFERENCES Person(id)
);

-- Crear la tabla intermedia StudentCourse para una relación muchos a muchos
CREATE TABLE StudentCourse (
    student_id INT,
    course_id INT,
    PRIMARY KEY (student_id, course_id),
    FOREIGN KEY (student_id) REFERENCES Student(id),
    FOREIGN KEY (course_id) REFERENCES Course(id)
);

-- Insertar valores en la tabla Person
INSERT INTO Person (id, name, first_name, last_name, document, date_of_birth, age) VALUES
(1, 'Juan Pérez', 'Juan', 'Pérez', '123456789', '1980-01-01', 43),
(2, 'Ana Gómez', 'Ana', 'Gómez', '987654321', '1990-05-15', 33);

-- Insertar valores en la tabla Teacher
INSERT INTO Teacher (id, specialty, teach) VALUES
(1, 'Matemáticas', 'Enseña álgebra y cálculo'),
(2, 'Física', 'Enseña mecánica y termodinámica');

-- Insertar valores en la tabla Course
INSERT INTO Course (id, name, credits, schedule, level, start_date, end_date, capacity, teacher) VALUES
(1, 'Cálculo', 4, 'Lunes, Miércoles, Viernes 10:00-11:00', 'Pregrado', '2023-09-01', '2023-12-15', 30, 1),
(2, 'Física 101', 3, 'Martes, Jueves 14:00-15:30', 'Pregrado', '2023-09-01', '2023-12-15', 25, 2);

-- Insertar valores en la tabla Student
INSERT INTO Student (id, email, enrollment_date, student_status, grade_level) VALUES
(1, 'juan.perez@ejemplo.com', '2023-08-20', 'Activo', 'Primer año'),
(2, 'ana.gomez@ejemplo.com', '2023-08-21', 'Activo', 'Segundo año');

-- Insertar valores en la tabla intermedia StudentCourse
INSERT INTO StudentCourse (student_id, course_id) VALUES
(1, 1),
(1, 2),
(2, 1);

-- join de todas las tablas
SELECT `pe`.*, `te`.*, `co`.*, `stco`.*, `st`.*
FROM `person` AS `pe` 
	LEFT JOIN `teacher` AS `te` ON `te`.`id` = `pe`.`id` 
	LEFT JOIN `course` AS `co` ON `co`.`teacher` = `te`.`id` 
	LEFT JOIN `studentcourse` AS `stco` ON `stco`.`course_id` = `co`.`id` 
	LEFT JOIN `student` AS `st` ON `st`.`id` = `pe`.`id`