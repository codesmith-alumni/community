"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = require('../models/User');
// sends an error code if no user found, otherwise sends user info and sets the
// session
// from there, send the requests properly
var loginController = function (req, res) {
    var _a = req.body, email = _a.email, password = _a.password;
    var user = new User('User', email, password);
    user.validateUser()
        .then(function (result) {
        var userInfo = result.rows[0];
        if (userInfo === undefined) {
            res.status(404).send('No matching user exists.');
        }
        req.session.loggedIn = true;
        req.session.user = userInfo.name;
        req.session.user_id = userInfo.id;
        res.status(200).send();
    })
        .catch(function (err) {
        console.log(err);
        res.status(401).send('Validation failed.');
    });
};
exports.default = loginController;
//# sourceMappingURL=loginController.js.map