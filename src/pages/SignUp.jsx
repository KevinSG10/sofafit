//pagina SignUP
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import './SignUp.css';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nombre, setNombre] = useState(''); // Nuevo estado para "nombre"
  const [peso, setPeso] = useState('');
  const [sexo, setSexo] = useState('');
  const [altura, setAltura] = useState('');
  const [edad, setEdad] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  // Estado para las validaciones de contraseña
  const [passwordValidations, setPasswordValidations] = useState({
    minLength: false,
    uppercase: false,
    lowercase: false,
    specialChar: false,
  });

  const validatePassword = (password) => {
    setPassword(password);
    setPasswordValidations({
      minLength: password.length >= 8,
      uppercase: /[A-Z]/.test(password),
      lowercase: /[a-z]/.test(password),
      specialChar: /[!@#$%^&*(),.?":{}|<>]/.test(password),
    });
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);

    // Validar los campos vacíos
    if (!email || !password || !nombre || !peso || !sexo || !altura || !edad) {
      setError('Por favor, completa todos los campos.');
      setLoading(false);
      return;
    }

    // Validar los requisitos de la contraseña
    if (
      password.length < 8 ||
      !/[A-Z]/.test(password) ||
      !/[a-z]/.test(password) ||
      !/[!@#$%^&*(),.?":{}|<>]/.test(password)
    ) {
      setError(
        'La contraseña debe tener al menos 8 caracteres, una letra mayúscula, una letra minúscula y un carácter especial.'
      );
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post('http://127.0.0.1:5000/register', {
        email,
        password,
        nombre, // Incluye "nombre" en los datos enviados
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
          <div className="password-field">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Contraseña"
              value={password}
              onChange={(e) => validatePassword(e.target.value)}
              required
              disabled={loading}
            />
            <button
              type="button"
              className="toggle-password"
              onClick={() => setShowPassword(!showPassword)}
              disabled={loading}
            >
              {showPassword ? 'Ocultar' : 'Ver'}
            </button>
          </div>
          {/* Validación de requisitos de la contraseña */}
          <ul className="password-requirements">
            <li className={passwordValidations.minLength ? 'valid' : ''}>
              Mínimo 8 caracteres, 1 letra mayúscula y minúscula. 1 carácter especial (!@#$%^&*)
            </li>
          </ul>
          {/* Nuevo campo de entrada para "nombre" */}
          <input
            type="text"
            placeholder="Nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
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
            step="0.01"
          />
          <input
            type="number"
            placeholder="Edad"
            value={edad}
            onChange={(e) => setEdad(e.target.value)}
            required
            disabled={loading}
          />
          <div className="select-wrapper">
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
          </div>
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







