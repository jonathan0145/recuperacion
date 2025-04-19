import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css'; // Import styles if needed

const NavigationMenu = () => {
  return (
    <nav className="navigation-menu">
      <ul>
        <li><Link to="/persons">Persons</Link></li>
        <li><Link to="/students">Students</Link></li>
        <li><Link to="/teachers">Teachers</Link></li>
        <li><Link to="/courses">Courses</Link></li>
        <li><Link to="/studentscourses">Student Courses</Link></li>
      </ul>
    </nav>
  );
};

export default NavigationMenu;