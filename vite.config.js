// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    modules: {
      scopeBehaviour: 'local', // Asegura que los estilos sean encapsulados localmente
      generateScopedName: '[name]__[local]___[hash:base64:5]', // Genera nombres únicos para las clases
    },
  },
})

