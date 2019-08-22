"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// const User = require('../models/User');
var pool = require('../database');
var userController = {
    create: null
};
userController.create = function (req, res) {
    var _a = req.body, name = _a.name, email = _a.email, password = _a.password;
    var karma = 0;
    var sql = 'INSERT INTO users (name, email, password, karma) VALUES ($1, $2, $3, $4) RETURNING *;';
    var values = [name, email, password, karma];
    pool.query(sql, values)
        .then(function (response) {
        req.session.loggedIn = true;
        res.status(200).send(JSON.stringify({
            id: response.rows[0].id,
            name: response.rows[0].name,
            email: response.rows[0].email,
        }));
    })
        .catch(function (err) {
        console.log(err);
        res.status(400).send(JSON.stringify('Error: User already exists'));
    });
};
exports.default = userController;
//# sourceMappingURL=userController.js.map