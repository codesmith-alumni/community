"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// create a User class for functionality like validation, getting userInfo etc.
var database_1 = require("../database");
var User = /** @class */ (function () {
    function User(name, email, password) {
        if (!email || !password) {
            throw new Error('Email, and password must all have values');
        }
        this.email = email;
        this.name = name;
        this.password = password;
    }
    User.prototype.addDetails = function (details) {
        // adds details to userInfo
    };
    /**
     * Will validate with the password on the given user
     * throws a descriptive error if user does not exist. Otherwise
     */
    User.prototype.validateUser = function () {
        // query the database to see if there exists a user in database... if so
        // validate the password...
        // if password matches throw user or password does not match
        // if not throw an error
        var sql = "SELECT * FROM users WHERE (email = $1) AND (password = $2)";
        var values = [this.email, this.password];
        return database_1.default.query(sql, values);
    };
    /**
     * Saves a user with the given user details to the database with zero karma,
     * returns a promise.
     */
    User.prototype.create = function () {
        var sql = "INSERT INTO users(name, email, password, karma) VALUES($1, $2, $3,$4) RETURNING *";
        var values = [this.name, this.email, this.password, 0];
        return database_1.default.query(sql, values);
    };
    return User;
}());
exports.default = User;
//# sourceMappingURL=User.js.map