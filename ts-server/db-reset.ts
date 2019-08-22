import pool from './database';

const sql = `
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS posts;

CREATE TABLE users (
  id SERIAL PRIMARY KEY, 
  name VARCHAR(50), 
  email VARCHAR(50) UNIQUE NOT NULL, 
  password VARCHAR(50) NOT NULL, 
  karma INTEGER NOT NULL,
  created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE posts (
  id SERIAL PRIMARY KEY,
  user_id INTEGER NOT NULL,
  company VARCHAR(50),
  content TEXT,
  created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);`

function reset() {
  return pool.query(sql)
  // .then((response) => console.log('DB successfully reset', response));
}

function end() {
  pool.end()
  // .then(() => console.log('Ended DB pool'));
}

module.exports = {
  reset,
  end
};
