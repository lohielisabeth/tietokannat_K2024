const mysql = require('mysql2');
const connection = mysql.createPool({
  host: 'localhost',
  user: 'testikayttaja',
  password: 'lohielisabeth',
  database: 'testidb'
});
module.exports = connection;