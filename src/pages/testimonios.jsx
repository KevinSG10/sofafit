import React from 'react';
import { Link } from 'react-router-dom';
import './style-test.css';

function Testimonios() {
  return (
    <div className="testimonios-page">
      <header>
        { }
        <nav className="dashboardNavbar">
          <div className="dashboardLogo">
            { }
            { }
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

            <Link to="/contact" className="dashboardLink">CONTACTO</Link>
            <Link to="/dashboard" className="dashboardLink">INICIO</Link>
          </div>
        </nav>

        { }
        <div className="titu">
          <h1> TESTIMONIOS</h1>
        </div>
      </header>

      <section className="contain">
        <div className="slider-wrapper">
          <div className="slider">
            <img id="slider-1" src="/assets/images/test1.png" alt="" />
            <img id="slider-2" src="/assets/images/test2.png" alt="" />
            <img id="slider-3" src="/assets/images/test3.png" alt="" />
            <img id="slider-4" src="/assets/images/test4.png" alt="" />
          </div>
          <div className="slider-nav">
            <a href="#slider-1"></a>
            <a href="#slider-2"></a>
            <a href="#slider-3"></a>
            <a href="#slider-4"></a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Testimonios;




