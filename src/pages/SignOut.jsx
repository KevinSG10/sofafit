// src/pages/SignOut.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../firebaseConfig'; 

const SignOut = () => {
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      navigate('/signin');
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
      alert('Hubo un problema al cerrar la sesión. Inténtalo nuevamente.');
    }
  };

  return (
    <button onClick={handleSignOut}>
      Cerrar Sesión
    </button>
  );
};

export default SignOut;
