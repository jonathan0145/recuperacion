-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 21-04-2025 a las 03:16:58
-- Versión del servidor: 10.4.22-MariaDB
-- Versión de PHP: 8.1.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `recuperacion`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `course`
--

CREATE TABLE `course` (
  `id` int(11) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `credits` int(11) DEFAULT NULL,
  `schedule` varchar(100) DEFAULT NULL,
  `level` varchar(50) DEFAULT NULL,
  `start_date` date DEFAULT NULL,
  `end_date` date DEFAULT NULL,
  `capacity` int(11) DEFAULT NULL,
  `teachers` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `course`
--

INSERT INTO `course` (`id`, `name`, `credits`, `schedule`, `level`, `start_date`, `end_date`, `capacity`, `teachers`) VALUES
(1, 'Cálculo', 4, 'Lunes, Miércoles, Viernes 10:00-11:00', 'Pregrado', '2023-09-01', '2023-12-15', 30, 1),
(2, 'preparacion para la sociedad y preparaciones', 4, 'Lunes, Miércoles, Viernes 10:00-11:00', 'Pregrado', '2023-09-01', '2023-12-15', 32, 2),
(5, 'se enseña quimica', 4, 'Lunes, Miércoles, Viernes 10:00-11:00', 'Pregrado', '2023-09-01', '2023-12-15', 32, 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `person`
--

CREATE TABLE `person` (
  `id` int(11) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `first_name` varchar(100) DEFAULT NULL,
  `last_name` varchar(100) DEFAULT NULL,
  `document` varchar(50) DEFAULT NULL,
  `date_of_birth` date DEFAULT NULL,
  `age` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `person`
--

INSERT INTO `person` (`id`, `name`, `first_name`, `last_name`, `document`, `date_of_birth`, `age`) VALUES
(1, 'Juan Pérez', 'Juan', 'Pérez', '123456789', '1980-01-01', 43),
(2, 'Ana Gómez', 'Ana', 'Gómez', '987654321', '1990-05-15', 33),
(5, 'dayana rendon', 'dayana', 'rendon', '159623847', '2021-05-29', 23),
(6, 'dayana rendon1', 'dayana', 'rendon1', '159623847', '2021-05-29', 23),
(7, 'dayana rendon1', 'dayana', 'rendon1', '159623847', '2021-05-29', 23),
(8, 'pipe bueno', 'pipe', 'bueno', '159357462', '2025-04-04', 21),
(9, 'das das', 'das ', 'das', '12344567', '2025-04-07', 43),
(10, 'áblo jaramillo', 'pablo', 'jaramillo', '123654789', '2025-04-11', 21),
(11, 'asd', 'asd', 'asd', '2131323232', '2025-04-05', 2),
(12, 'juanito animalla', 'juanito', 'animalla', '56542321', '2025-04-04', 21),
(13, 'daniela al', 'daniela', 'al', '426875319', '2025-04-01', 23),
(14, 'prime tu', 'prime', 'tu', '123654789', '2025-04-16', 21);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `student`
--

CREATE TABLE `student` (
  `id` int(11) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `enrollment_date` date DEFAULT NULL,
  `student_status` varchar(50) DEFAULT NULL,
  `grade_level` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `student`
--

INSERT INTO `student` (`id`, `email`, `enrollment_date`, `student_status`, `grade_level`) VALUES
(1, 'juan.perez@ejemplo.com', '2023-08-20', 'Activo', 'Primer año'),
(2, 'ana.gomez@ejemplo.com', '2023-08-21', 'Activo', 'Segundo año'),
(5, 'dayana.rendon@ejemplo.com', '2024-05-21', 'Activo', 'Onceavo año');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `studentcourse`
--

CREATE TABLE `studentcourse` (
  `student_id` int(11) NOT NULL,
  `course_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `studentcourse`
--

INSERT INTO `studentcourse` (`student_id`, `course_id`) VALUES
(1, 1),
(1, 2),
(2, 2),
(2, 5),
(5, 1),
(5, 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `teacher`
--

CREATE TABLE `teacher` (
  `id` int(11) NOT NULL,
  `specialty` varchar(100) DEFAULT NULL,
  `teach` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `teacher`
--

INSERT INTO `teacher` (`id`, `specialty`, `teach`) VALUES
(1, 'ingles', 'Enseña idiomas en especial ingles'),
(2, 'sociales', 'enseña historia y comportamiento de la sociedad');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `password`, `createdAt`, `updatedAt`) VALUES
(1, 'jonathan0145', 'jonathan0145@ejemplo.com', '$2b$10$3jM./JjRIojrf5xaocjLDuia7/NUCWMpfkLYllgUm8RltpkUQNuge', '2025-04-19 15:02:38', '2025-04-19 15:02:38'),
(2, 'jonathan01456', 'jonathanivanrendonbermeo@gmail.com', '$2b$10$8JSya3RVXGy28SQmk2IB3OtUY2rtpfZkf7.d7ndokKKNs/B0ouYi.', '2025-04-19 16:41:37', '2025-04-19 16:41:37'),
(3, 'jonathan1999', 'jonathan_bermeo014@hotmail.com', '$2b$10$hhq9jjVC/EHYROjvxNpfH.m4B.87GmcgdO9dYT61GhT6AdP3D7l5S', '2025-04-19 16:47:53', '2025-04-19 16:47:53'),
(4, 'juanitoperez', 'juanitoperez@ejemplo.com', '$2b$10$kY.KLLSEOb89zcbkpVUrq.gPz1MSu3MQ.kgpai1MTsNW4MHmBw/p2', '2025-04-19 19:15:02', '2025-04-19 19:15:02');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `course`
--
ALTER TABLE `course`
  ADD PRIMARY KEY (`id`),
  ADD KEY `course_ibfk_1` (`teachers`);

--
-- Indices de la tabla `person`
--
ALTER TABLE `person`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `student`
--
ALTER TABLE `student`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `studentcourse`
--
ALTER TABLE `studentcourse`
  ADD PRIMARY KEY (`student_id`,`course_id`),
  ADD KEY `course_id` (`course_id`);

--
-- Indices de la tabla `teacher`
--
ALTER TABLE `teacher`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `course`
--
ALTER TABLE `course`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `person`
--
ALTER TABLE `person`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT de la tabla `student`
--
ALTER TABLE `student`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `teacher`
--
ALTER TABLE `teacher`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `course`
--
ALTER TABLE `course`
  ADD CONSTRAINT `course_ibfk_1` FOREIGN KEY (`teachers`) REFERENCES `teacher` (`id`);

--
-- Filtros para la tabla `student`
--
ALTER TABLE `student`
  ADD CONSTRAINT `student_ibfk_1` FOREIGN KEY (`id`) REFERENCES `person` (`id`);

--
-- Filtros para la tabla `studentcourse`
--
ALTER TABLE `studentcourse`
  ADD CONSTRAINT `studentcourse_ibfk_1` FOREIGN KEY (`student_id`) REFERENCES `student` (`id`),
  ADD CONSTRAINT `studentcourse_ibfk_2` FOREIGN KEY (`course_id`) REFERENCES `course` (`id`);

--
-- Filtros para la tabla `teacher`
--
ALTER TABLE `teacher`
  ADD CONSTRAINT `teacher_ibfk_1` FOREIGN KEY (`id`) REFERENCES `person` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
