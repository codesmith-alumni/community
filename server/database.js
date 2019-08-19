const { Pool } = require('pg');
const connectionString = `postgres://yxkooucillvnji:e8ffdca24e5d6a61645ce1533c24ad109f0ba5a7008c117ef306009d6b80cf9a@ec2-54-225-106-93.compute-1.amazonaws.com:5432/deojpi4chtngn
`;

/*
Database set up with the following SQL:

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
);

Access in the CLI with psql [URI]
View tables with /dt

*/

const pool = new Pool({ connectionString, ssl: true });

module.exports = pool;
