require('dotenv').config();
const { Pool } = require('pg');
const connectionString = process.env.DB_ENV === 'production' ?
  process.env.DB_PROD :
  process.env.DB_TEST;

let ssl = false;
if (process.env.DB_ENV === 'production') {
  ssl = true;
}

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

const pool = new Pool({ connectionString, ssl });

export default pool;
