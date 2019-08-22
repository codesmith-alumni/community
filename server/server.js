'use strict';

Object.defineProperty(exports, '__esModule', { value: true });
let express = require('express');
let session = require('express-session');
let RedisStore = require('connect-redis')(session);
let path = require('path');
let bodyParser = require('body-parser');
let RedisDB = require('./reddis-database');
let postController_1 = require('./controllers/postController');
let loginController_1 = require('./controllers/loginController');
let authMiddleware_1 = require('./middleware/authMiddleware');
let userController_1 = require('./controllers/userController');

let app = express();
let port = 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, '../dist'), { extensions: ['html', 'css', 'js'], index: false }));
app.use(session({
  store: new RedisStore({ client: RedisDB }),
  secret: 'communitycat',
  cookie: { maxAge: 60000 },
  resave: false,
  saveUnititialized: true,
}));
app.use(authMiddleware_1.default);
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../dist/index.html'));
});
app.get('/isLoggedIn', (req, res) => {
  if (!req.session.loggedIn) {
    return res.send(JSON.stringify({ isLoggedIn: false }));
  }
  return res.send(JSON.stringify({ isLoggedIn: true, user: req.session.user }));
});
app.get('/posts/:company', postController_1.default.get);
app.get('/posts/', postController_1.default.get);
app.post('/posts', postController_1.default.post);
app.post('/auth/login', loginController_1.default);
app.post('/auth/signup', userController_1.default.create);
app.listen(port, () => { return console.log("Listening on port " + port); });
// # sourceMappingURL=server.js.map
