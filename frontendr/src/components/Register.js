import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../apiService';
import '../formStyles.css'; // Import the styles

const Register = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState('');
  const [success, setSuccess] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);
    setServerError('');
    try {
      const response = await registerUser(data);
      console.log('Usuario registrado:', response.data);
      setSuccess(true);
    } catch (error) {
      console.error('Error al registrar usuario:', error);
      setServerError(error.response?.data?.message || 'Registro fallido');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Nombre de usuario</label>
        <input {...register('username', { required: true })} />
        {errors.username && <span className="error">Este campo es obligatorio</span>}
      </div>
      <div>
        <label>Correo electrónico</label>
        <input type="email" {...register('email', { required: true })} />
        {errors.email && <span className="error">Este campo es obligatorio</span>}
      </div>
      <div>
        <label>Contraseña</label>
        <input type="password" {...register('password', { required: true })} />
        {errors.password && <span className="error">Este campo es obligatorio</span>}
      </div>
      <button type="submit" disabled={loading}>
        {loading ? 'Registrando...' : 'Registrar'}
      </button>
      {serverError && <div className="error">{serverError}</div>}
      {success && (
        <div className="success">
          <p>Registro exitoso. Ahora puedes iniciar sesión.</p>
          <button onClick={() => navigate('/login')}>Iniciar Sesión</button>
        </div>
      )}
    </form>
  );
};

export default Register;