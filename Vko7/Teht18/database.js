const mysql = require('mysql2');
const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'lohielisabeth',
  database: 'opinto'
});
module.exports = connection;