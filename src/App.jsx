// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import Tips from './pages/Tips';
import TestPage from './pages/TestPage';
import PlanAlimentacion from './pages/PlanAlimentacion';
import Principiante from './pages/Principiante';
import Intermedio from './pages/Intermedio';
import Avanzado from './pages/Avanzado';
import Testimonios from './pages/Testimonios';
import Contact from './pages/Contact';
import Perfil from './pages/Perfil';
import Progreso from './pages/Progreso'; // Importa el componente Progreso

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/signin" />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/tips" element={<Tips />} />
        <Route path="/test" element={<TestPage />} />
        <Route path="/plan-alimentacion" element={<PlanAlimentacion />} />
        <Route path="/principiante" element={<Principiante />} />
        <Route path="/intermedio" element={<Intermedio />} />
        <Route path="/avanzado" element={<Avanzado />} />
        <Route path="/testimonios" element={<Testimonios />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/progreso" element={<Progreso />} /> {/* Nueva ruta Progreso */}
      </Routes>
    </Router>
  );
}

export default App;





