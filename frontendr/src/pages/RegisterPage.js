import React, { useState } from 'react';
import Register from '../components/Register';
import Login from '../components/Login'; // Import the Login component
import '../styles.css'; // Import the styles

const RegisterPage = () => {
  const [showRegister, setShowRegister] = useState(false); // State to toggle between login and register

  return (
    <div className="page-container"> {/* Apply the page-container class */}
      <h2>{showRegister ? 'Registro' : 'Iniciar Sesión'}</h2>
      {showRegister ? (
        <Register />
      ) : (
        <Login />
      )}
      <button onClick={() => setShowRegister(!showRegister)}>
        {showRegister ? 'Ya tienes una cuenta? Inicia Sesión' : 'No tienes una cuenta? Regístrate'}
      </button>
    </div>
  );
};

export default RegisterPage;