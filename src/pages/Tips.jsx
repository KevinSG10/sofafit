// Tips.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './StyleTips.module.css'; 

const Tips = () => {
  return (
    <div className={styles.containerTips}>
      <header className={styles.tipsNavbar}>
        <div className={styles.tipsLogo}>
          <img src="/assets/images/logo-home.png" alt="Logo" className={styles.tipsLogoImg} />
          SOFAFIT
        </div>
        <nav className={styles.tipsMenu}>
          <Link to="/plan-alimentacion" className={styles.linkTips}>ALIMENTACIÓN</Link>
          <Link to="/testimonios" className={styles.linkTips}>TESTIMONIOS</Link>
          <Link to="/contact" className={styles.linkTips}>CONTACTO</Link>
        
          <Link to="/dashboard" className={styles.linkTips}>INICIO</Link>
        </nav>
      </header>

      <main className={styles.mainContentTips}>
        <h1 className={styles.tipsTitle}>Tips y Consejos para Ejercitarte en Casa</h1>

        <section className={styles.tipsSection}>
          <div className={styles.tipItem}>
            <h2 className={styles.tipTitle}>Encuentra tu Espacio Perfecto</h2>
            <p className={styles.tipText}>Asegúrate de tener un lugar cómodo y libre de distracciones para hacer ejercicio. No necesitas mucho espacio, solo un rincón donde puedas moverte con libertad. Puedes poner una colchoneta, algunas pesas o bandas elásticas y ¡listo!</p>
          </div>

          <div className={styles.tipItem}>
            <h2 className={styles.tipTitle}>Establece una Rutina</h2>
            <p className={styles.tipText}>La clave del éxito está en la consistencia. Establece un horario específico para tus entrenamientos y trata de seguirlo. Puede ser por la mañana antes de empezar tu día o por la tarde después del trabajo. Lo importante es que encuentres un momento que se adapte a tu vida.</p>
          </div>

          <div className={styles.tipItem}>
            <h2 className={styles.tipTitle}>Varía tus Ejercicios</h2>
            <p className={styles.tipText}>Hacer siempre la misma rutina puede volverse aburrido y disminuir tu motivación. Prueba diferentes tipos de ejercicios como yoga, HIIT, pilates, o danza. Esto no solo mantendrá las cosas interesantes, sino que también te ayudará a trabajar diferentes grupos musculares.</p>
          </div>

          <div className={styles.tipItem}>
            <h2 className={styles.tipTitle}>Escucha a tu Cuerpo</h2>
            <p className={styles.tipText}>Es importante prestar atención a cómo te sientes durante y después de tus entrenamientos. Si sientes dolor o estás extremadamente cansado, tómate un descanso. Es mejor hacer pausas y permitir que tu cuerpo se recupere que forzarte y terminar con una lesión.</p>
          </div>

          <div className={styles.tipItem}>
            <h2 className={styles.tipTitle}>Usa la Tecnología a Tu Favor</h2>
            <p className={styles.tipText}>Hay muchas aplicaciones y videos en línea que pueden guiarte a través de rutinas de ejercicios desde casa. Busca opciones que se adapten a tu nivel de condición física y tus objetivos. Algunas aplicaciones incluso te permiten hacer un seguimiento de tu progreso, lo cual es genial para mantener la motivación.</p>
          </div>

          <div className={styles.tipItem}>
            <h2 className={styles.tipTitle}>Mantén la Hidratación</h2>
            <p className={styles.tipText}>No olvides tomar suficiente agua antes, durante y después de tus entrenamientos. La hidratación es clave para mantener tu rendimiento y evitar calambres.</p>
          </div>

          <div className={styles.tipItem}>
            <h2 className={styles.tipTitle}>Encuentra un Compañero de Ejercicio Virtual</h2>
            <p className={styles.tipText}>Hacer ejercicio con un amigo, aunque sea virtualmente, puede ser muy motivador. Pueden animarse mutuamente y hacer que los entrenamientos sean más divertidos. Pueden conectarse por video llamada y seguir la misma rutina juntos.</p>
          </div>

          <div className={styles.tipItem}>
            <h2 className={styles.tipTitle}>Establece Metas Realistas</h2>
            <p className={styles.tipText}>Establecer metas alcanzables es crucial para mantenerte motivado. No te exijas demasiado al principio. Comienza con objetivos pequeños y ve aumentando la intensidad y duración de tus entrenamientos conforme te sientas más cómodo.</p>
          </div>

          <div className={styles.tipItem}>
            <h2 className={styles.tipTitle}>Premia tu Esfuerzo</h2>
            <p className={styles.tipText}>Después de una buena sesión de ejercicio, date un pequeño premio. Puede ser un batido saludable, un episodio de tu serie favorita o un baño relajante. Celebrar tus logros te ayudará a mantener una actitud positiva.</p>
          </div>

          <div className={styles.tipItem}>
            <h2 className={styles.tipTitle}>Mantén una Actitud Positiva</h2>
            <p className={styles.tipText}>Es normal tener días en los que no te sientas tan motivado para hacer ejercicio. En lugar de castigarte, recuerda que cada pequeño esfuerzo cuenta. Mantén una actitud positiva y date crédito por cada paso que tomes hacia una vida más saludable.</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Tips;



