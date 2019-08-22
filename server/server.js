const express = require("express");
const session = require("express-session");
const RedisStore = require("connect-redis")(session);
const path = require("path");
const bodyParser = require("body-parser");
const RedisDB = require("./reddis-database");
const postController = require("./controllers/postController");
const signupController = require("./controllers/signupController");
const loginController = require("./controllers/loginController");
const authMiddleware = require("./middleware/authMiddleware");
const userController = require("./controllers/userController");

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  express.static(path.resolve(__dirname, "../dist"), {
    extensions: ["html", "css", "js"],
    index: false
  })
);

app.use(
  session({
    store: new RedisStore({ client: RedisDB }),
    secret: "communitycat",
    cookie: { maxAge: 60000 },
    resave: false,
    saveUnititialized: true
  })
);

app.use(authMiddleware);

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../dist/index.html"));
});

// app.get('/login');

app.get("/isLoggedIn", (req, res) => {
  if (!req.session.loggedIn) {
    return res.send(JSON.stringify({ isLoggedIn: false }));
  }
  return res.send(JSON.stringify({ isLoggedIn: true, user: req.session.user }));
});

app.get("/posts/:company", postController.get);
app.get("/posts/", postController.get);
app.post("/posts", postController.post);
app.post("/signup", userController.create);

app.post("/auth/login", loginController);
// app.post('/auth/signup', signupController);

app.listen(port, () => console.log(`Listening on port ${port}`));
