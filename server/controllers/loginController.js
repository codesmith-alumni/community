const User = require("../models/User");

const loginController = (req, res) => {
  const { email, password } = req.body;
  console.log(password, email);
  const user = new User("User", email, password);

  user
    .validateUser()
    .then(result => {
      req.session.loggedIn = true;
      const userInfo = result.rows[0];
      if (userInfo === undefined) {
        res.status(404).send("No matching user exists.");
      }
      delete userInfo["password"];
      delete userInfo["id"];
      res.status(200).send(JSON.stringify(userInfo));
    })
    .catch(err => {
      console.log(err);
      res.status(401).send("Validation failed.");
    });
};

module.exports = loginController;
