const express = require('express');
const path = require('path');

const app = express();

app.use('/user', (req, res, next) => {
  res.sendFile(path.join(__dirname, `/views/login.html`));
  next();
});

app.use((req, res, next) => {
  res.show = (name) => {
    res.sendFile(path.join(__dirname, `/views/${name}`));
  };
  next();
});

app.use(express.static(path.join(__dirname, '/public')));

app.get('/', (req, res) => {
  res.show('index.html');
});

app.get('/home', (req, res) => {
  res.show('index.html');
});

app.get('/about', (req, res) => {
  res.show('about.html');
});

app.get('/views/user/settings', (req, res) => {
  res.show('settings.html');
});

app.get('/views/user/panel', (req, res) => {
  res.show('panel.html');
});

app.get('/hello/:name', (req, res) => {
  res.send(`Hello ${req.params.name}`);
});

app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, '/public/404errorwires.jpg'));
});

app.listen(8000, () => {
  console.log('Server is running on port: 8000');
});
