// creating a web server (build in HTTP module API)
const http = require('http');

const server = http.createServer((req, res) => {
  res.end('Hello World\n');
});

// check if server runs succesfully
server.listen(4242, () => {
  console.log('Server is running...');
});
