// pagina db.js
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost', 
  user: 'root',     
  password: '1234', 
  database: 'db_sofafit' 
});

connection.connect((err) => {
  if (err) {
    console.error('Error conectando a MySQL:', err.stack);
    return;
  }
  console.log('Conectado a MySQL como ID ' + connection.threadId);
});

module.exports = connection;

