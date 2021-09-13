

const { Client } = require('pg')
const connectionData = {
    user: 'postgres',
    host: 'localhost',
    database: 'wallet',
    password: 'Mnbvcxz0987',
    port: 5432,
  }
  const   conexion = new Client(connectionData);
    conexion.connect(error =>{
      if(error){
          console.error('El error de conexion es:',error.stack);
          return;
      }
      console.log ('Conectado a la base de datos');
  });
  module.exports = conexion;

    /*client.query('SELECT * FROM customer')
    .then(response => {
        console.log(response.rows)
        client.end()
    })
    .catch(err => {
        client.end()
    })*/