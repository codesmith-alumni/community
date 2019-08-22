"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var authMiddleware = function (req, res, next) {
    // check the session... if it is good, great!
    var safeRoutes = ['/', '/auth/login', '/auth/signup', '/isLoggedIn'];
    if (!req.session.loggedIn && !safeRoutes.includes(req.originalUrl)) {
        return res.redirect('/');
    }
    next();
    // check original URL... if it is not one of the protected routes, forward it
    // along
    // get the cookies off of the request
    // if loggedIn, allow by calling next;
    // else, direct them to signup
};
exports.default = authMiddleware;
//# sourceMappingURL=authMiddleware.js.map