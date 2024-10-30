// pagina SignIn.jax
// página SignIn
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import './SignIn.css';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // Enviamos una solicitud POST a tu backend para iniciar sesión
      const response = await axios.post('http://localhost:5000/login', {
        email,
        password,
      });

      if (response.status === 200) {
        // Almacenar el nombre del usuario en localStorage
        localStorage.setItem('userName', response.data.name);
        // Opcional: almacenar el email si aún lo necesitas
        localStorage.setItem('userEmail', email);
        navigate('/dashboard');
      }
    } catch (error) {
      setLoading(false);
      if (error.response) {
        if (error.response.status === 401) {
          alert('Correo o contraseña incorrectos.');
        } else {
          console.error('Error al iniciar sesión:', error);
          alert('Error en el servidor. Intenta nuevamente más tarde.');
        }
      } else {
        console.error('Error al iniciar sesión:', error);
        alert('Error de conexión. Verifica que el servidor esté activo.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signin-wrapper">
      <div className="signin-container">
        <h2>Iniciar Sesión SofaFit</h2>
        <form onSubmit={handleSignIn}>
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
          <button type="submit" disabled={loading}>
            {loading ? 'Cargando...' : 'Iniciar Sesión'}
          </button>
        </form>
        <p>
          ¿No tienes una cuenta? <Link to="/signup">Regístrate aquí</Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;








