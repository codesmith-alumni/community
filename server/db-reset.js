const pool = require('./database');

const sql = `
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS posts;

CREATE TABLE users (
  id SERIAL PRIMARY KEY, 
  name VARCHAR(50), 
  email VARCHAR(50) UNIQUE NOT NULL, 
  password VARCHAR(50) NOT NULL, 
  karma INTEGER NOT NULL
);
 
CREATE TABLE posts (
  id SERIAL PRIMARY KEY,
  user_id INTEGER NOT NULL,
  company VARCHAR(50),
  content TEXT
);`;

function reset() {
  return pool.query(sql);
}

function end() {
  pool.end();
}

module.exports = { reset, end };
