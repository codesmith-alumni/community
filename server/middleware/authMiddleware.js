const authMiddleware = (req, res, next) => {
  // check original URL... if it is not one of the protected routes, forward it along
  // get the cookies off of the request
  // if loggedIn, allow by calling next;
  // else, direct them to signup
};

module.exports = authMiddleware;
