// pagina perfil.jsx.
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './perfil.css';
import { Link, useNavigate } from 'react-router-dom';

const Perfil = () => {
  const [userData, setUserData] = useState({
    email: '',
    password: '',
    peso: '',
    sexo: '',
    altura: '',
    edad: ''
  });

  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const email = localStorage.getItem('userEmail');

    if (email) {
      axios.get(`http://127.0.0.1:5000/user-profile?email=${email}`)
        .then((response) => {
          setUserData(response.data);
        })
        .catch((error) => {
          console.error('Error al obtener los datos del perfil:', error);
        });
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('userEmail');
    navigate('/signin');
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  const handleSave = () => {
    const email = localStorage.getItem('userEmail');

    axios.put(`http://127.0.0.1:5000/update-profile`, {
      email,
      ...userData,
    })
      .then((response) => {
        alert('Perfil actualizado correctamente.');
        setIsEditing(false);
      })
      .catch((error) => {
        console.error('Error al actualizar el perfil:', error);
        alert('Hubo un error al actualizar tu perfil. Por favor, inténtalo nuevamente.');
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="perfilContainer">
      {/* Menú de navegación */}
      <div className="menu_perfilNavbar">
        <div className="menu_perfilLogo">
          <img src="/assets/images/logo-home.png" alt="Logo" className="menu_perfilLogoImg" />
          SOFAFIT
        </div>

        <div className="menu_perfilMenu">
          <div className="menu_perfilDropdown">
            <Link to="#" className="menu_perfilLink">PROGRAMAS</Link>
            <div className="menu_perfilDropdownContent">
              <Link to="/principiante" className="menu_perfilLink">PRINCIPIANTE</Link>
              <Link to="/intermedio" className="menu_perfilLink">INTERMEDIO</Link>
              <Link to="/avanzado" className="menu_perfilLink">AVANZADO</Link>
            </div>
          </div>
          <Link to="/Tips" className="menu_perfilLink">TIPS & CONSEJOS</Link>
          <Link to="/plan-alimentacion" className="menu_perfilLink">ALIMENTACIÓN</Link>
          <Link to="/testimonios" className="menu_perfilLink">TESTIMONIOS</Link>
          <Link to="/contact" className="menu_perfilLink">CONTACTO</Link>
          <Link to="/perfil" className="menu_perfilLink">MI PERFIL</Link>

          <button
            id="menu_perfilLogoutButton"
            className="menu_perfilBtn"
            onClick={handleLogout}
          >
            SALIR
          </button>
        </div>
      </div>

      {/* Contenido del perfil */}
      <div className="perfilContent">
        <h1>Perfil de Usuario</h1>
        {isEditing ? (
          <>
            <p>
              <strong>Email:</strong> {userData.email}
            </p>
            <p>
              <strong>Contraseña:</strong>
              <input
                type="password"
                name="password"
                value={userData.password}
                onChange={handleChange}
              />
            </p>
            <p>
              <strong>Peso (kg):</strong>
              <input
                type="number"
                name="peso"
                value={userData.peso}
                onChange={handleChange}
              />
            </p>
            <p>
              <strong>Sexo:</strong>
              <select
                name="sexo"
                value={userData.sexo}
                onChange={handleChange}
              >
                <option value="">Selecciona tu sexo</option>
                <option value="hombre">Hombre</option>
                <option value="mujer">Mujer</option>
              </select>
            </p>
            <p>
              <strong>Altura (m):</strong>
              <input
                type="number"
                step="0.01"
                name="altura"
                value={userData.altura}
                onChange={handleChange}
              />
            </p>
            <p>
              <strong>Edad:</strong>
              <input
                type="number"
                name="edad"
                value={userData.edad}
                onChange={handleChange}
              />
            </p>
            <button id="btnGuardarPerfil" className="btn-perfil-guardar" onClick={handleSave}>Guardar</button>
            <button id="btnCancelarPerfil" className="btn-perfil-cancelar" onClick={handleCancel}>Cancelar</button>
          </>
        ) : (
          <>
            <p><strong>Email:</strong> {userData.email || 'No disponible'}</p>
            <p><strong>Contraseña:</strong> {userData.password || 'No disponible'}</p>
            <p><strong>Peso:</strong> {userData.peso ? `${userData.peso} kg` : 'No especificado'}</p>
            <p><strong>Sexo:</strong> {userData.sexo || 'No especificado'}</p>
            <p><strong>Altura:</strong> {userData.altura ? `${userData.altura} m` : 'No especificada'}</p>
            <p><strong>Edad:</strong> {userData.edad ? `${userData.edad} años` : 'No especificada'}</p>
            <button id="btnEditarPerfil" className="btn-perfil-editar" onClick={handleEdit}>Editar Perfil</button>
          </>
        )}
      </div>
    </div>
  );
};

export default Perfil;




