const express = require('express');
const app = express();
const port = (process.env.PORT = 3000);
const path = require('path');

app.get('/', (req, res) => {
  res.status(200);
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/about', (req, res) => {
  res.status(200);
  res.sendFile(path.join(__dirname, 'about.html'));
});

app.get('/contact-me', (req, res) => {
  res.status(200);
  res.sendFile(path.join(__dirname, 'contact-me.html'));
});

app.get('/404', (req, res) => {
  res.status(404);
  res.sendFile(path.join(__dirname, '404.html'));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
