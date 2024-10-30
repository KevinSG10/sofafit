import React from 'react';
import './style-contact.css';

function Contacto() {
  const handleLogout = () => {
    // Lógica de cierre de sesión
  };

  return (
    <div className="contact-page">
      {/* Menú de navegación */}
      <div className="menu_contactoNavbar">
        <div className="menu_contactoLogo">
          <img src="/assets/images/logo-home.png" alt="Logo" className="menu_contactoLogoImg" />
          SOFAFIT
        </div>

        <div className="menu_contactoMenu">
          <div className="menu_contactoDropdown">
          </div>
          <a href="/tips" className="menu_contactoLink">TIPS & CONSEJOS</a>
          <a href="/plan-alimentacion" className="menu_contactoLink">ALIMENTACIÓN</a>
          <a href="/testimonios" className="menu_contactoLink">TESTIMONIOS</a>
          <a href="/contact" className="menu_contactoLink">CONTACTO</a>
          <a href="/perfil" className="menu_contactoLink">MI PERFIL</a>
          <a href="/dashboard" className="menu_contactoLink">INICIO</a>

          <button id="menu_contactoLogoutButton" className="menu_contactoBtn" onClick={handleLogout}>
            SALIR
          </button>
        </div>
      </div>
      
      <header>
        {/* Título para contacto */}
        <div className="container titulo">
          <h1 className="titulo">Contáctenos</h1>
        </div>
      </header>

      {/* Información */}
      <div className="container-form">
        <div className="information">
          <div className="info-childs">
            <h2>
              El peor enemigo de la victoria...
              <br />
              es la duda!!
            </h2>
            <p>
              Dirígete a nuestros números de contacto y con gusto te acompañamos en este proceso:
              <b> Contactos: (+57) 3014085897 - 3233673192</b>
              en redes sociales como: <b>@sofafit</b>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacto;



