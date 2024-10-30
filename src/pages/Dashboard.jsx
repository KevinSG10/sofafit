//pagina Dashboard
// pagina Dashboard
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import moduleStyles from './Dashboard.module.css';
import { signOut } from 'firebase/auth';
import { auth } from '../firebaseConfig';

const Dashboard = () => {
  const [userName, setUserName] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Obtenemos el nombre del usuario desde localStorage
    const name = localStorage.getItem('userName');
    if (name) {
      setUserName(name);
    }
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      // Eliminamos el nombre y el email del usuario de localStorage
      localStorage.removeItem('userName');
      localStorage.removeItem('userEmail');
      navigate('/signin');
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
      alert('Hubo un problema al cerrar la sesión. Inténtalo nuevamente.');
    }
  };

  return (
    <div className={moduleStyles.dashboardContainer}>
      <div className={moduleStyles.dashboardNavbar}>
        <div className={moduleStyles.dashboardLogo}>
          <img
            src="/assets/images/logo-home.png"
            alt="Logo"
            className={moduleStyles.dashboardLogoImg}
          />
          SOFAFIT
        </div>

        {/* Mostramos el nombre del usuario */}
        <span className={moduleStyles.dashboardUser}>Hola, {userName}</span>

        <div className={moduleStyles.dashboardMenu}>
          <div className={moduleStyles.dashboardDropdown}>
            <Link to="#" className={moduleStyles.dashboardLink}>
              PROGRAMAS
            </Link>
            <div className={moduleStyles.dashboardDropdownContent}>
              <Link to="/principiante" className={moduleStyles.dashboardLink}>
                PRINCIPIANTE
              </Link>
              <Link to="/intermedio" className={moduleStyles.dashboardLink}>
                INTERMEDIO
              </Link>
              <Link to="/avanzado" className={moduleStyles.dashboardLink}>
                AVANZADO
              </Link>
            </div>
          </div>
          <Link to="/Tips" className={moduleStyles.dashboardLink}>
            TIPS & CONSEJOS
          </Link>
          <Link to="/plan-alimentacion" className={moduleStyles.dashboardLink}>
            ALIMENTACIÓN
          </Link>
          <Link to="/testimonios" className={moduleStyles.dashboardLink}>
            TESTIMONIOS
          </Link>
          <Link to="/contact" className={moduleStyles.dashboardLink}>
            CONTACTO
          </Link>
          <Link to="/perfil" className={moduleStyles.dashboardLink}>
            MI PERFIL
          </Link>
          <Link to="/progreso" className={moduleStyles.dashboardLink}>
            MI PROGRESO
          </Link>
          
          <button
            id="dashboardLogoutButton"
            className={moduleStyles.dashboardBtn}
            onClick={handleLogout}
          >
            SALIR
          </button>
        </div>
      </div>

      <div className={moduleStyles.dashboardHomeImage}>
        <div className={moduleStyles.dashboardCenteredContent}>
          <h1 className={moduleStyles.dashboardHeading}>
            ¡SÉ MÁS FUERTE QUE TUS EXCUSAS!
          </h1>
          <h2 className={moduleStyles.dashboardSubheading}>
            Tus metas fitness sin salir de casa.
          </h2>
          <p className={moduleStyles.dashboardText}>
            Transforma tu hogar en tu zona de fuerza: entrena, suda, y supera tus
            límites desde la comodidad de tu sala. Sin excusas, solo resultados:
            ¡tu gimnasio en casa te espera!
          </p>
          <button
            className={moduleStyles.dashboardBtnPrimary}
            onClick={() => navigate('/principiante')}
          >
            Empezar a Entrenar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;











