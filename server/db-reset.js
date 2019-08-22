"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var database_1 = require("./database");
var sql = "\nDROP TABLE IF EXISTS users;\nDROP TABLE IF EXISTS posts;\n\nCREATE TABLE users (\n  id SERIAL PRIMARY KEY, \n  name VARCHAR(50), \n  email VARCHAR(50) UNIQUE NOT NULL, \n  password VARCHAR(50) NOT NULL, \n  karma INTEGER NOT NULL,\n  created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP\n);\n\nCREATE TABLE posts (\n  id SERIAL PRIMARY KEY,\n  user_id INTEGER NOT NULL,\n  company VARCHAR(50),\n  content TEXT,\n  created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP\n);";
function reset() {
    return database_1.default.query(sql);
    // .then((response) => console.log('DB successfully reset', response));
}
function end() {
    database_1.default.end();
    // .then(() => console.log('Ended DB pool'));
}
module.exports = {
    reset: reset,
    end: end
};
//# sourceMappingURL=db-reset.js.map