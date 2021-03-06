const express = require('express');
const path = require('path');
const hbs = require('express-handlebars');
const multer = require('multer');
const upload = multer();

const app = express();

app.engine(
  '.hbs',
  hbs({ extname: 'hbs', layoutsDir: './layouts', defaultLayout: 'main' })
);
app.set('view engine', '.hbs');

app.use('/user', (req, res) => {
  res.render('login');
});

app.use(express.static(path.join(__dirname, '/public')));

app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/home', (req, res) => {
  res.render('index');
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/contact', (req, res) => {
  res.render('contact');
});

app.get('/info', (req, res) => {
  res.render('info');
});

app.get('/history', (req, res) => {
  res.render('history');
});

app.get('/user/settings', (req, res) => {
  res.render('settings');
});

app.get('/user/panel', (req, res) => {
  res.render('panel');
});

app.get('/hello/:name', (req, res) => {
  res.render('hello', { layout: false, name: req.params.name });
});

app.post(
  '/contact/send-message',
  upload.single('projectdesign'),
  (req, res) => {
    const { author, sender, title, message } = req.body;
    const file = req.file;

    if (author && sender && title && file && message) {
      res.render('contact', { isSent: true, file: file.originalname });
    } else {
      res.render('contact', { isError: true });
    }
  }
);

app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, '/public/404errorwires.jpg'));
});

app.listen(8000, () => {
  console.log('Server is running on port: 8000');
});
