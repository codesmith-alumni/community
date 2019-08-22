var pool = require('./database');
var sql = "\nDROP TABLE IF EXISTS users;\nDROP TABLE IF EXISTS posts;\n\nCREATE TABLE users (\n  id SERIAL PRIMARY KEY, \n  name VARCHAR(50), \n  email VARCHAR(50) UNIQUE NOT NULL, \n  password VARCHAR(50) NOT NULL, \n  karma INTEGER NOT NULL,\n  created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP\n);\n\nCREATE TABLE posts (\n  id SERIAL PRIMARY KEY,\n  user_id INTEGER NOT NULL,\n  company VARCHAR(50),\n  content TEXT\n);";
function reset() {
    return pool.query(sql);
    // .then((response) => console.log('DB successfully reset', response));
}
function end() {
    pool.end();
    // .then(() => console.log('Ended DB pool'));
}
module.exports = { reset: reset, end: end };
//# sourceMappingURL=db-reset.js.map