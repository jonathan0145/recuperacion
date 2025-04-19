import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';
import PersonsPage from './pages/PersonsPage'; // Import PersonsPage
import StudentsPage from './pages/StudentsPage'; // Import StudentsPage
import TeachersPage from './pages/TeachersPage'; // Import TeachersPage
import CoursesPage from './pages/CoursesPage'; // Import CoursesPage
import StudentCoursesPage from './pages/StudentCoursesPage'; // Import StudentCoursesPage
import NavigationMenu from './components/NavigationMenu';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <NavigationMenu />
          <Routes>
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/persons" element={<PersonsPage />} /> {/* Add route for PersonsPage */}
            <Route path="/students" element={<StudentsPage />} /> {/* Add route for StudentsPage */}
            <Route path="/teachers" element={<TeachersPage />} /> {/* Add route for TeachersPage */}
            <Route path="/courses" element={<CoursesPage />} /> {/* Add route for CoursesPage */}
            <Route path="/studentscourses" element={<StudentCoursesPage />} /> {/* Add route for StudentCoursesPage */}
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
