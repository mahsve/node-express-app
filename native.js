const http = require('node:http');

// Create a local server to receive data from
const server = http.createServer((req, res) => {
  res.write('Hola mundo!')
  res.end()

  // res.writeHead(200, { 'Content-Type': 'application/json' });
  // res.end(JSON.stringify({
  //   data: 'Hello World!',
  // }));
});

server.listen(8000); 

console.log('Cargando servidor web en el puerto 8000')