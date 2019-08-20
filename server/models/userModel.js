// create a User class for functionality like validation, getting userInfo etc.
module.exports = class User {
  constructor(username, password) {
    this.username = username;
    this.password = password;
    this.userInfo = {
      username,
      password
    };
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
  }

  /**
   * Saves a user with the given user details to the database.
   */
  save() {}
};
