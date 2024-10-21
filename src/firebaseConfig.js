// src/firebaseConfig.js

// Importa las funciones necesarias del SDK de Firebase
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // Importación necesaria para Firestore
import { getAnalytics } from "firebase/analytics";

// Configuración de Firebase para tu aplicación web
const firebaseConfig = {
  apiKey: "AIzaSyDkCMdHAONcG4gGeX3k2eJj8A-ximXlp68",
  authDomain: "sofafit-fedb0.firebaseapp.com",
  projectId: "sofafit-fedb0",
  storageBucket: "sofafit-fedb0.appspot.com",
  messagingSenderId: "660700595237",
  appId: "1:660700595237:web:c81221300bab1ab064ebcc",
  measurementId: "G-JHS3XNEBZP"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Configura y exporta los servicios que usarás
export const auth = getAuth(app);
export const db = getFirestore(app); // Inicializa Firestore correctamente
export const analytics = getAnalytics(app);

