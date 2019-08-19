const express = require('express');
const path = require('path');
const postController = require('./postController');

const app = express();
const port = 3000;

app.get('/', (req, res) => res.sendFile(path.resolve(__dirname, '../client/index.html')));

// app.get('/login');
// app.get('/signup');

app.get('/posts/:company', postController.get);
app.get('/posts/', postController.get);
// app.post('/posts', postController.post);

app.listen(port, () => console.log(`Listening on port ${port}`));