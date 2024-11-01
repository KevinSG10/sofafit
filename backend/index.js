//pagina index.js
const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'db_sofafit',
});

db.connect((err) => {
  if (err) {
    console.error('Error conectando a MySQL:', err);
    return;
  }
  console.log('Conectado a MySQL');
});

// Endpoint para registro actualizado
app.post('/register', (req, res) => {
  console.log('Punto 1: Solicitud recibida en /register');
  console.log('Datos recibidos en /register:', req.body);

  // Incluimos 'nombre' en la desestructuración
  const { email, password, nombre, peso, sexo, altura, edad } = req.body;

  // Validamos que todos los campos están presentes
  if (!email || !password || !nombre || !peso || !sexo || !altura || !edad) {
    console.log('Punto 2: Faltan campos requeridos');
    return res.status(400).json({ message: 'Todos los campos son requeridos' });
  }

  console.log('Punto 3: Todos los campos presentes');

  db.query('SELECT * FROM users WHERE email = ?', [email], (err, results) => {
    if (err) {
      console.error('Error al verificar el correo:', err);
      return res.status(500).json({ message: 'Error en el servidor' });
    }

    if (results.length > 0) {
      console.log('Punto 4: El correo ya está registrado');
      return res.status(409).json({ message: 'El correo electrónico ya está registrado' });
    } else {
      console.log('Punto 5: Registrando nuevo usuario');


      // Incluimos 'nombre' en la consulta INSERT
      db.query(
        'INSERT INTO users (email, password, nombre, peso, sexo, altura, edad) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [email, password, nombre, peso, sexo, altura, edad],
        (err, result) => {
          if (err) {
            console.error('Error al registrar el usuario:', err);
            return res.status(500).json({ message: 'Error al registrar el usuario' });
          } else {
            console.log('Punto 6: Usuario registrado exitosamente');
            return res.status(200).json({ message: 'Usuario registrado exitosamente' });
          }
        }
      );
    }
  });
});


// Endpoint para inicio de sesión
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Email y contraseña son requeridos' });
  }



  // Verificar si el usuario existe y la contraseña coincide
  db.query('SELECT * FROM users WHERE email = ? AND password = ?', [email, password], (err, results) => {
    if (err) {
      console.error('Error al verificar el usuario:', err);
      return res.status(500).json({ message: 'Error en el servidor' });
    }

    if (results.length > 0) {
      // Inicio de sesión exitoso
      const user = results[0]; // Obtenemos el usuario de los resultados
      res.status(200).json({
        message: 'Inicio de sesión exitoso',
        name: user.nombre, // Devolvemos el nombre del usuario
      });
    } else {
      // Credenciales incorrectas
      res.status(401).json({ message: 'Correo o contraseña incorrectos' });
    }
  });
});





// Endpoint para actualizar el perfil del usuario
app.put('/update-profile', (req, res) => {
  const { email, password, nombre, peso, sexo, altura, edad } = req.body;

  if (!email) {
    return res.status(400).json({ message: 'Email es requerido' });
  }

  // Construir el objeto de actualización
  const updateData = {
    password,
    nombre, 
    peso,
    sexo,
    altura,
    edad,
  };


  // Eliminar campos undefined o null
  Object.keys(updateData).forEach((key) => {
    if (updateData[key] === undefined || updateData[key] === null) {
      delete updateData[key];
    }
  });

  // Generar la consulta de actualización dinámica
  const fields = Object.keys(updateData).map((key) => `${key} = ?`).join(', ');
  const values = Object.values(updateData);
  values.push(email);

  const sql = `UPDATE users SET ${fields} WHERE email = ?`;


  db.query(sql, values, (err, result) => {
    if (err) {
      console.error('Error al actualizar el perfil:', err);
      return res.status(500).json({ message: 'Error al actualizar el perfil' });
    }

    if (result.affectedRows > 0) {
      res.status(200).json({ message: 'Perfil actualizado exitosamente' });
    } else {
      res.status(404).json({ message: 'Usuario no encontrado' });
    }
  });
});






// Endpoint para obtener los datos del perfil del usuario
app.get('/user-profile', (req, res) => {
  const { email } = req.query;

  if (!email) {
    return res.status(400).json({ message: 'Email requerido' });
  }


  // Consulta a la base de datos para obtener todos los datos del usuario
  db.query('SELECT email, password, nombre, peso, sexo, altura, edad FROM users WHERE email = ?', [email], (err, results) => {
    if (err) {
      console.error('Error al obtener los datos del usuario:', err);
      return res.status(500).json({ message: 'Error en el servidor' });
    }

    if (results.length > 0) {
      res.status(200).json(results[0]);
    } else {
      res.status(404).json({ message: 'Usuario no encontrado' });
    }
  });
});


// Endpoint para Obtener el Progreso
app.get('/progress', (req, res) => {
  const { email } = req.query;

  if (!email) {
    return res.status(400).json({ message: 'Email requerido' });
  }

  db.query(
    'SELECT training_date, status FROM progreso WHERE userEmail = ? ORDER BY training_date ASC',
    [email],
    (err, results) => {
      if (err) {
        console.error('Error al obtener el progreso:', err);
        return res.status(500).json({ message: 'Error al obtener el progreso' });
      }
      res.status(200).json(results);
    }
  );
});



//. Endpoint para Marcar un Día de Ejercicio
app.post('/update-progress', (req, res) => {
  const { email, exercise_date, status } = req.body;

  if (!email || !exercise_date) {
    return res.status(400).json({ message: 'Email y fecha de ejercicio son requeridos' });
  }

  db.query(
    'INSERT INTO progreso (userEmail, training_date, status) VALUES (?, ?, ?) ON DUPLICATE KEY UPDATE status = ?',
    [email, exercise_date, status, status],
    (err, result) => {
      if (err) {
        console.error('Error al actualizar el progreso:', err);
        return res.status(500).json({ message: 'Error al actualizar el progreso' });
      }
      res.status(200).json({ message: 'Progreso actualizado exitosamente' });
    }
  );
});



const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});





