"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require('express');
var session = require('express-session');
var RedisStore = require('connect-redis')(session);
var path = require('path');
var bodyParser = require('body-parser');
var RedisDB = require('./reddis-database');
var postController_1 = require("./controllers/postController");
var loginController = require('./controllers/loginController');
var authMiddleware_1 = require("./middleware/authMiddleware");
var userController = require('./controllers/userController');
var app = express();
var port = 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, '../dist'), { extensions: ['html', 'css', 'js'], index: false }));
app.use(session({
    store: new RedisStore({ client: RedisDB }),
    secret: 'communitycat',
    cookie: { maxAge: 60000 },
    resave: false,
    saveUnititialized: true
}));
app.use(authMiddleware_1.default);
app.get('/', function (req, res) {
    res.sendFile(path.resolve(__dirname, '../dist/index.html'));
});
app.get('/isLoggedIn', function (req, res) {
    if (!req.session.loggedIn) {
        return res.send(JSON.stringify({ isLoggedIn: false }));
    }
    return res.send(JSON.stringify({ isLoggedIn: true, user: req.session.user }));
});
app.get('/posts/:company', postController_1.default.get);
app.get('/posts/', postController_1.default.get);
app.post('/posts', postController_1.default.post);
app.post('/auth/login', loginController);
app.post('/auth/signup', userController.create);
app.listen(port, function () { return console.log("Listening on port " + port); });
//# sourceMappingURL=server.js.map