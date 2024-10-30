// src/pages/Progreso.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Progreso = () => {
  const [progressData, setProgressData] = useState([]);

  useEffect(() => {
    const fetchProgress = async () => {
      try {
        const userEmail = localStorage.getItem('userEmail');
        const response = await axios.get(`http://localhost:5000/progress`, {
          params: { email: userEmail },
        });
        setProgressData(response.data);
      } catch (error) {
        console.error('Error al obtener el progreso:', error);
      }
    };

    fetchProgress();
  }, []);

  return (
    <div>
      <h1>Progreso de Ejercicio</h1>
      <ul>
        {progressData.map((record, index) => (
          <li key={index}>
            {record.training_date}: {record.status === 'completed' ? '✔️' : '❌'}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Progreso;
