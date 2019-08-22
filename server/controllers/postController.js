"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var database_1 = require("../database");
var postController = {};
postController.get =
    function (req, res, next) {
        var company = req.params.company;
        var sql = "SELECT * FROM posts";
        if (company)
            sql += " WHERE company LIKE '%" + company + "%'";
        sql += ";";
        database_1.default.query(sql)
            .then(function (response) {
            res.send(response.rows);
        })
            .catch(function (err) { return console.log(err); });
    };
postController.post = function (req, res, next) {
    var _a = req.body, company = _a.company, content = _a.content;
    var user_id = req.session.user_id;
    var sql = "INSERT INTO posts (user_id, company, content) VALUES ($1, $2, $3) RETURNING *";
    var values = [user_id, company, content];
    database_1.default.query(sql, values).then(function (response) {
        res.status(200);
        res.send(response.rows[0]);
    });
};
exports.default = postController;
//# sourceMappingURL=postController.js.map