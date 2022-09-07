const http = require('http');
const fs = require('fs');
const port = 3000;

const server = http.createServer((req, res) => {
  const path = req.url;

  if (path === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(fs.readFileSync('./pages/index.html'));
  } else if (path === '/about') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(fs.readFileSync('./pages/about.html'));
  } else if (path === '/contact-me') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(fs.readFileSync('./pages/contact-me.html'));
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end(fs.readFileSync('./pages/404.html'));
  }
});

server.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
