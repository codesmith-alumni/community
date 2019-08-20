const User = require("../models/User");

const loginController = (req, res) => {
  const { email, password } = req.body;
  const user = new User(null, email, password);

  user.validateUser().then(res=>{
    res.cookie
  }).catch(err=>{

  })

  // pull the username off of the request body
  // pull the password off of the request body
  // validate the username in the database by instantiating a user class
  //
};

module.exports = loginController;
