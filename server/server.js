const express = require("express");
const session = require("express-session");
const path = require("path");
const bodyParser = require("body-parser");
const postController = require("./controllers/postController");
const signupController = require("./controllers/signupController");
const loginController = require("./controllers/loginController");
const authMiddleware = require("./middleware/authMiddleware");

const app = express();
const port = 3000;

app.use(
  express.static(path.resolve(__dirname, "../dist"), {
    extensions: ["html", "css", "js"],
    index: false
  })
);

app.use(
  session({
    secret: "community cat",
    cookie: { maxAge: 60000 },
    resave: false,
    saveUnititialized: true
  })
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use((req, res, next) => {
  console.log("hitting the server");
  next();
});

app.get("/", authMiddleware, (req, res) => {
  console.log("inside of root controller");
  res.sendFile(path.resolve(__dirname, "../dist/index.html"));
});

// app.get('/login');
// app.get('/signup');

app.get("/posts/:company", postController.get);
app.get("/posts/", postController.get);
app.post("/posts", postController.post);

app.post("/auth/login", loginController);
app.post("/auth/signup", signupController);

app.listen(port, () => console.log(`Listening on port ${port}`));
