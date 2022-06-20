// mysql2 para local por error de autenticación con mysql
// comando utilizado para cambiar uno por otro --> npm un mysql && npm i mysql2
const mysql = require('mysql2');

// base de datos en local

const mysqlConnection = mysql.createConnection({
  host: "localhost",
  port: "3306",
  user: "usuario",
  password: "usuario",
  database: "BoxDictrito9",
});


mysqlConnection.connect((err, data) => {
  if (err) throw err;
  console.log("DB is CONNECTED");
});

module.exports = mysqlConnection;
