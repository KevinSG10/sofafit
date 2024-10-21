import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './style-contact.css';

function Contacto() {


  return (
    <div className="contact-page">
      <header>
        {}
        <nav className="dashboardNavbar">
          <div className="dashboardLogo">
            {}
            {}
            <span>SOFAFIT</span>
          </div>
          <div className="dashboardMenu">
            <div className="dashboardDropdown">
              <Link to="#" className="dashboardLink">PROGRAMAS</Link>
              <div className="dashboardDropdownContent">
                <Link to="/principiante" className="dashboardLink">PRINCIPIANTE</Link>
                <Link to="/intermedio" className="dashboardLink">INTERMEDIO</Link>
                <Link to="/avanzado" className="dashboardLink">AVANZADO</Link>
              </div>
            </div>
            <Link to="/tips" className="dashboardLink">TIPS & CONSEJOS</Link>
            <Link to="/plan-alimentacion" className="dashboardLink">ALIMENTACIÓN</Link>
            <Link to="/testimonios" className="dashboardLink">TESTIMONIOS</Link>
            <Link to="/dashboard" className="dashboardLink">INICIO</Link>

          </div>
        </nav>

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


