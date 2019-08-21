const { reset, end } = require("../../server/db-reset");
const User = require("../../server/models/User");
const pool = require("../../server/database");

describe("Tests for User Model.", () => {
  beforeAll(done => {
    reset().then(() => done());
  });
  afterEach(done => {
    reset().then(() => done());
  });

  it("User saves into the database.", done => {
    const user = new User("Ian", "test@test.com", "password");
    try {
      const res = user
        .save()
        .then(res => {
          expect(res.rows.length).toBe(1);
          done();
        })
        .catch(err => {
          throw new Error("Save operation failed:", err);
        });
    } catch (err) {
      throw new Error("Save operation failed:", err);
    }
  });

  describe("Tests for user", () => {
    beforeAll(done => {
      pool
        .query(
          "INSERT INTO users(name, email, password, karma) VALUES($1, $2, $3,$4)",
          ["test", "test@test.com", "testpass", 0]
        )
        .then(() => {
          done();
        })
        .catch(() => {
          done();
        });
    });

    it("Validates User with right password.", done => {
      const user = new User("test", "test@test.com", "testpass");
      user
        .validateUser()
        .then(res => {
          expect(res.rows.length).toBeGreaterThan(0);
          done();
        })
        .catch(err => {
          throw err;
        });
    });

    it("Properly validates User with wrong password.", done => {
      const user = new User("testy", "test@test.com", "testpass");
      user
        .validateUser()
        .then(res => {
          expect(res.rows.length).toBe(0);
          done();
        })
        .catch(err => {
          throw err;
        });
    });
  });
  afterAll(() => end());
});
