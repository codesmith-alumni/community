// const User = require('../models/User');
const pool = require('../database');
const userController: {create: any} = {
  create: null
};

userController.create = (req, res) => {
  const {name, email, password} = req.body;
  const karma = 0;
  const sql =
      'INSERT INTO users (name, email, password, karma) VALUES ($1, $2, $3, $4) RETURNING *;';
  const values = [name, email, password, karma];
  pool.query(sql, values)
      .then((response) => {
        req.session.loggedIn = true;
        res.status(200).send(JSON.stringify({
          id: response.rows[0].id,
          name: response.rows[0].name,
          email: response.rows[0].email,
        }));
      })
      .catch((err) => {
        console.log(err);
        res.status(400).send(JSON.stringify('Error: User already exists'));
      });
};

export default userController;
