const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const postController = require('./postController');

const app = express();
const port = 3000;

app.use(express.static(path.resolve(__dirname, '../dist')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', (req, res) => res.sendFile(path.resolve(__dirname, '../dist/index.html')));

// app.get('/login');
// app.get('/signup');

app.get('/posts/:company', postController.get);
app.get('/posts/', postController.get);
app.post('/posts', postController.post);

app.listen(port, () => console.log(`Listening on port ${port}`));