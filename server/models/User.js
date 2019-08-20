// create a User class for functionality like validation, getting userInfo etc.
const pool = require("../database");
class User {
  constructor(name, email, password) {
    if (!name || !email || !password) {
      throw new Error("Username, email, and password must all have values");
    }
    this.email = email;
    this.name = name;
    this.password = password;
  }

  addDetails(details) {
    // adds details to userInfo
  }

  /**
   * Will validate with the password on the given user
   * throws a descriptive error if user does not exist. Otherwise
   */
  validateUser() {
    // query the database to see if there exists a user in database... if so validate the password...
    // if password matches throw user or password does not match
    //if not throw an error
    const sql = `
    SELECT * FROM users WHERE (email = $1) AND (password = $2)
    `;
    const values = [this.email, this.password];
    return pool.query(sql, values);
  }

  /**
   * Saves a user with the given user details to the database with zero karma, returns a promise.
   */
  save() {
    const sql = `
    INSERT INTO users(name, email, password, karma) VALUES($1, $2, $3,$4) RETURNING * 
    `;
    const values = [this.name, this.email, this.password, 0];
    return pool.query(sql, values);
  }
}

// const user = new User("Ian", "ian@gmail.com", "asdfasd");
// user
//   .save()
//   .then(err => console.log(err))
//   .catch(err => console.log(err));

module.exports = User;
