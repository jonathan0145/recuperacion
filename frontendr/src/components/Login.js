import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../apiService';
import '../formStyles.css'; // Import the styles

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await loginUser(data);
      console.log('Usuario ha iniciado sesión:', response.data);
      localStorage.setItem('token', response.data.token); // Ensure token is stored
      navigate('/home');
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Email</label>
        <input type="email" {...register('email', { required: true })} />
        {errors.email && <span className="error">Este campo es obligatorio</span>}
      </div>
      <div>
        <label>Contraseña</label>
        <input type="password" {...register('password', { required: true })} />
        {errors.password && <span className="error">Este campo es obligatorio</span>}
      </div>
      <button type="submit">Iniciar Sesión</button>
    </form>
  );
};

export default Login;