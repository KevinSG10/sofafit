/*pagina SignUp.jsx*/
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import './SignUp.css';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [peso, setPeso] = useState('');
  const [sexo, setSexo] = useState('');
  const [altura, setAltura] = useState('');
  const [edad, setEdad] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);

    if (!email || !password || !peso || !sexo || !altura || !edad) {
      setError('Por favor, completa todos los campos.');
      setLoading(false);
      return;
    }

    console.log('Datos a enviar:', {
      email,
      password,
      peso,
      sexo,
      altura,
      edad,
    });
  

    try {
      const response = await axios.post('http://127.0.0.1:5000/register', {
        email,
        password,
        peso,
        sexo,
        altura,
        edad,
      });
      if (response.status === 200) {
        setSuccess('Registro exitoso. Redirigiendo al inicio de sesión...');
        setLoading(false);
        setTimeout(() => {
          navigate('/signin');
        }, 2000);
      }
    } catch (error) {
      setLoading(false);
      if (error.response && error.response.status === 409) {
        setError('El correo electrónico ya está registrado.');
      } else {
        console.error('Error al registrarse:', error);
        setError('Error al registrarse. Verifica tus datos e intenta nuevamente.');
      }
    }
  };

  return (
    <div className="signup-wrapper">
      <div className="signup-container">
        <h2>Registrarse</h2>
        {error && <p className="error-message">{error}</p>}
        {success && <p className="success-message">{success}</p>}
        <form onSubmit={handleSignUp}>
          <input
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={loading}
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            disabled={loading}
          />
          <input
            type="number"
            placeholder="Peso (kg)"
            value={peso}
            onChange={(e) => setPeso(e.target.value)}
            required
            disabled={loading}
          />
          <input
            type="number"
            placeholder="Altura (m)"
            value={altura}
            onChange={(e) => setAltura(e.target.value)}
            required
            disabled={loading}
            step="0.01" // Permite ingresar decimales
          />
          <input
            type="number"
            placeholder="Edad"
            value={edad}
            onChange={(e) => setEdad(e.target.value)}
            required
            disabled={loading}
          />
          <select
            value={sexo}
            onChange={(e) => setSexo(e.target.value)}
            required
            disabled={loading}
          >
            <option value="">Selecciona tu sexo</option>
            <option value="hombre">Hombre</option>
            <option value="mujer">Mujer</option>
          </select>
          <button type="submit" disabled={loading}>
            {loading ? 'Registrando...' : 'Registrarse'}
          </button>
        </form>
        <p>
          ¿Ya tienes una cuenta? <Link to="/signin">Inicia sesión aquí</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;







