const { reset, end } = require("../db-reset");

reset()
  .then(end())
  .catch(err => console.log("error configuring:", err));
