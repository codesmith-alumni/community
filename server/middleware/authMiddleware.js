const authMiddleware = (req, res, next) => {
  console.log(req.session);
  // check the session... if it is good, great!
  const safeRoutes = ["/", "/auth/login", "/isLoggedIn"];
  if (!req.session.loggedIn && !safeRoutes.includes(req.originalUrl)) {
    return res.redirect("/");
  }
  next();
  // check original URL... if it is not one of the protected routes, forward it along
  // get the cookies off of the request
  // if loggedIn, allow by calling next;
  // else, direct them to signup
};

module.exports = authMiddleware;
