// base de datos en local

const mysqlConnection = mysql.createConnection({
   host: 'localhost',
   port: '8000',
   user: 'usuario',
   password: 'usuario',
   database: 'BoxDictrito9'
   });


   mysqlConnection.connect((err, data) => {
       if (err) throw err;
       console.log("DB is CONNECTED");
   });   

module.exports = mysqlConnection;
