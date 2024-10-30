import React, { useState, useRef, useEffect } from 'react';
import './principiante.css';
import { Link } from 'react-router-dom';

const Principiante = () => {
  const [selectedLevel, setSelectedLevel] = useState(null);
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedExercise, setSelectedExercise] = useState(null);

  // Referencia a la sección de la rutina
  const routineSectionRef = useRef(null);

  const showRoutine = (level) => {
    setSelectedLevel(level);
    setSelectedDay(getCurrentDay()); 
    setSelectedExercise(null); 
    // Eliminamos la llamada a scrollIntoView desde aquí
  };

  // Efecto para desplazar la vista cuando selectedLevel cambia
  useEffect(() => {
    if (selectedLevel && routineSectionRef.current) {
      routineSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [selectedLevel]);

  // Función para obtener el día actual
  const getCurrentDay = () => {
    const today = new Date();
    return today.getDate();
  };

  // Obtener el número de días en el mes actual
  const getDaysInMonth = () => {
    const now = new Date();
    return new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
  };

  // Rutinas de ejemplo para cada día
  const routineForDay = (day) => {
    if (day % 7 === 0) {
      return [{ name: "Descanso", videoFile: null }];
    }

    if (selectedLevel === 'principiante') {
      return [
        { name: "1: Iniciar 3 series de 10 repeticiones", videoFile: "video1.mp4" },
        { name: "2: Iniciar 3 series de 10 repeticiones", videoFile: "video2.mp4" },
      ];
    }
    if (selectedLevel === 'intermedio') {
      return [
        { name: "4 series de 12 repeticiones", videoFile: "video3.mp4" },
        { name: "4 series de 12 repeticiones", videoFile: "video4.mp4" },
      ];
    }
    if (selectedLevel === 'avanzado') {
      return [
        { name: "5 series de 15 repeticiones", videoFile: "video5.mp4" },
        { name: "5 series de 15 repeticiones", videoFile: "video6.mp4" },
      ];
    }
    return [];
  };

  // Función para obtener el video del ejercicio seleccionado
  const getVideoForExercise = () => {
    if (selectedExercise && selectedExercise.videoFile) {
      return `/videos/${selectedExercise.videoFile}`;
    }
    return null;
  };

  // Manejar la selección de un día del calendario
  const handleDaySelect = (day) => {
    setSelectedDay(day);
    setSelectedExercise(null); 
  };

  return (
    <div>
      {/* Navbar */}
      <div className="prin-navbar">
        <div className="prin-logo">
          <img src="/assets/images/logo-home.png" alt="Logo" className="prin-logo-img" />
          SOFAFIT
        </div>
        <div className="prin-menu">
          <Link to="/tips">TIPS & CONSEJOS</Link>
          <Link to="/plan-alimentacion">ALIMENTACIÓN</Link>
          <Link to="/testimonios">TESTIMONIOS</Link>
          <Link to="/contact">CONTACTO</Link>
          <Link to="/dashboard">INICIO</Link>
        </div>
      </div>

      {/* Contenido Principal */}
      <div className="prin-content">
        <h1>Bienvenido al Nivel de entrenamiento PRINCIPIANTE elige una rutina</h1>
        <div className="prin-level-selection">
          {/* Tarjetas de nivel */}
          <div className="prin-level-card">
            <h2>Perder Peso</h2>
            <img src="/src/images/principiante.jpg" alt="Principiante" />
            <p> Enfoque en quemar calorías y grasa.</p>
            <button onClick={() => showRoutine('principiante')}>Comenzar</button>
          </div>
          <div className="prin-level-card">
            <h2>Ganar Masa Muscular</h2>
            <img src="/src/images/intermedio.jpg" alt="Intermedio" />
            <p>Entrenamiento de fuerza y resistencia</p>
            <button onClick={() => showRoutine('intermedio')}>Comenzar</button>
          </div>
          <div className="prin-level-card">
            <h2>Estar en forma</h2>
            <img src="/src/images/avanzado.jpg" alt="Avanzado" />
            <p>Combinación equilibrada de ejercicios.</p>
            <button onClick={() => showRoutine('avanzado')}>Comenzar</button>
          </div>
        </div>

        {/* Sección de Rutina */}
        {selectedLevel && (
          <div
            id="prin-routine-section"
            className="prin-routine-section"
            ref={routineSectionRef}
          >
            <div className="prin-routine-content">
              <div className="prin-calendar-container">
                <h2>Días del Mes</h2>
                <div className="prin-calendar">
                  {Array.from({ length: getDaysInMonth() }, (_, i) => (
                    <div
                      key={i}
                      className={`prin-day ${
                        i + 1 === getCurrentDay() ? 'current-day' : ''
                      } ${selectedDay === i + 1 ? 'selected-day' : ''}`}
                      onClick={() => handleDaySelect(i + 1)}
                    >
                      {i + 1}
                    </div>
                  ))}
                </div>
              </div>

              {/* Detalles de la Rutina */}
              <div className="prin-routine-details">
                <h2>
                  Rutina para{' '}
                  {selectedLevel === 'principiante'
                    ? 'Perder Peso'
                    : selectedLevel === 'intermedio'
                    ? 'Ganar Masa Muscular'
                    : 'Estar en Forma'}
                </h2>
                {selectedDay ? (
                  routineForDay(selectedDay).map((exercise, index) => (
                    <p key={index}>
                      {exercise.name !== 'Descanso' ? (
                        <button
                          onClick={() => setSelectedExercise(exercise)}
                          className="prin-exercise-button"
                        >
                          {exercise.name}
                        </button>
                      ) : (
                        exercise.name
                      )}
                    </p>
                  ))
                ) : (
                  <p>Selecciona un día del calendario para ver la rutina.</p>
                )}
              </div>

              {/* Video de la Rutina */}
              <div className="prin-video-container">
                <h2>Video de la Rutina</h2>
                {selectedExercise ? (
                  selectedExercise.videoFile ? (
                    <video key={selectedExercise.videoFile} controls autoPlay>
                      <source src={getVideoForExercise()} type="video/mp4" />
                      Tu navegador no soporta la reproducción de video.
                    </video>
                  ) : (
                    <p>Hoy es día de descanso. No hay video disponible.</p>
                  )
                ) : (
                  <p>Selecciona un ejercicio para ver el video de la rutina.</p>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Principiante;









