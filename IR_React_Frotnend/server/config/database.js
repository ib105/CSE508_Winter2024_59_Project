// config/database.js
const mysql = require('mysql2');

// pool helps to manage multiple database connections at once
const pool = mysql.createPool({
  host: 'localhost', // Usually 'localhost'
  user: 'root', // Your MySQL username
  database: 'users', // Your database name
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

module.exports = pool.promise();
