const express = require('express');
const path = require('path');
const hbs = require('express-handlebars');

const app = express();

app.engine('.hbs', hbs());
app.set('view engine', '.hbs');

app.use('/user', (req, res) => {
  res.render('login', { layout: false });
});

app.use(express.static(path.join(__dirname, '/public')));

app.get('/', (req, res) => {
  res.render('index', { layout: false });
});

app.get('/home', (req, res) => {
  res.render('index', { layout: false });
});

app.get('/about', (req, res) => {
  res.render('about', { layout: false });
});

app.get('/user/settings', (req, res) => {
  res.render('settings', { layout: false });
});

app.get('/user/panel', (req, res) => {
  res.render('panel', { layout: false });
});

app.get('/hello/:name', (req, res) => {
  res.render('hello', { layout: false, name: req.params.name });
});

app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, '/public/404errorwires.jpg'));
});

app.listen(8000, () => {
  console.log('Server is running on port: 8000');
});
