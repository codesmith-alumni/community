const express = require('express');
const session = require('express-session');
const RedisStore = require('connect-redis')(session);
const path = require('path');
const bodyParser = require('body-parser');
const RedisDB = require('./reddis-database');
import postController from './controllers/postController';
import loginController from './controllers/loginController';
import authMiddleware from './middleware/authMiddleware';
import userController from './controllers/userController';

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(
  path.resolve(__dirname, '../dist'),
  { extensions: ['html', 'css', 'js'], index: false }));

app.use(session({
  store: new RedisStore({ client: RedisDB }),
  secret: 'communitycat',
  cookie: { maxAge: 60000 },
  resave: false,
  saveUnititialized: true
}));

app.use(authMiddleware, (req, res, next) => {
  next();
});

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../dist/index.html'));
});


app.get('/isLoggedIn', (req, res) => {
  if (!req.session.loggedIn) {
    return res.send(JSON.stringify({ isLoggedIn: false }));
  }
  return res.send(JSON.stringify({ isLoggedIn: true, user: req.session.user }));
});

app.get('/posts/:company', postController.get);
app.get('/posts/', postController.get);
app.post('/posts', postController.post);

app.post('/auth/login', loginController.login);
app.post('/auth/signup', userController.create);
app.get('/auth/logout', loginController.logout);

app.listen(port, () => console.log(`Listening on port ${port}`));
