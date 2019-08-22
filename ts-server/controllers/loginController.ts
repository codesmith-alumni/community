import User from '../models/User';

// sends an error code if no user found, otherwise sends user info and sets the
// session
// from there, send the requests properly

const loginController = (req, res) => {
  const {email, password} = req.body;
  const user = new User('User', email, password);

  user.validateUser()
      .then(result => {
        const userInfo = result.rows[0];
        if (userInfo === undefined) {
          res.status(404).send('No matching user exists.');
        }
        req.session.loggedIn = true;
        req.session.user = userInfo.name;
        req.session.user_id = userInfo.id
        res.status(200).send();
      })
      .catch(err => {
        console.log(err);
        res.status(401).send('Validation failed.');
      });
};

export default loginController;
