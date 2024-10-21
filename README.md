# SofaFit

SofaFit es una aplicación web enfocada en brindar programas de ejercicio personalizados para entrenar desde casa. Los usuarios pueden crear un perfil, elegir su nivel de entrenamiento y seguir rutinas adecuadas a sus características físicas, como peso, altura, sexo y edad.

## Características principales:
- Registro e inicio de sesión de usuarios.
- Sección de perfil de usuario con la capacidad de actualizar información personal.
- Programas de entrenamiento divididos en niveles: Principiante, Intermedio y Avanzado.
- Rutinas diarias con recomendaciones personalizadas basadas en la información del perfil.
- Consejos y tips para una vida saludable.
- Planes de alimentación sugeridos.
- Sección de testimonios.
- Panel de contacto y comentarios.

## Tecnologías utilizadas:
- **Frontend:** React con Vite, HTML5, CSS3.
- **Backend:** Node.js, Express.js.
- **Base de datos:** MySQL.
- **Estilos:** CSS modular para componentes reutilizables.
- **Control de versiones:** Git y GitHub.

## Instalación:

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/KevinSG10/sofafit.git


2. **Configurar la base de datos:**
- Crear una base de datos MySQL llamada db_sofafit.
- Ejecutar el siguiente script para crear la tabla users

```bash
 CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  peso DECIMAL(5,2),
  sexo ENUM('hombre', 'mujer'),
  altura DECIMAL(5,2),
  edad INT
);

4. Configurar las variables de entorno para la conexión con MySQL en db.js:

```bash
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'TU_CONTRASEÑA',
  database: 'db_sofafit',
});

5. Iniciar el servidor de desarrollo:
 -**Backend:**

```bash
cd backend
node index.js

**Frontend:**
```bash
cd frontend
npm run dev

**Funcionalidades adicionales:**
Actualización del perfil: El usuario puede modificar su peso, altura, edad y contraseña desde la página de perfil.
Recomendación personalizada de rutinas: La aplicación sugiere rutinas basadas en los datos físicos del usuario.
Niveles de entrenamiento: Los usuarios pueden elegir entre tres niveles: Principiante, Intermedio y Avanzado, con rutinas específicas para cada nivel.
Rutinas diarias: El sistema permite elegir la rutina para un día específico del mes.

Autenticación:
El sistema usa autenticación simple de usuarios con almacenamiento de credenciales en la base de datos.


Autor:
Este proyecto fue desarrollado por Kevin Gallego y Alexandra Carvajal, como parte de un esfuerzo para ofrecer una solución fitness sencilla para aquellos que prefieren entrenar en casa.






















