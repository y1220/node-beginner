// creating a web server (build in HTTP module API)
// const http = require('http');
// doesn't work...
import http from 'http';
// import { createServer } from 'http';


const server = http.createServer((req, res) => {
  res.end('Hello Noooode\n');
});

// check if server runs succesfully
server.listen(4242, () => {
  console.log('Server is running...');
});
