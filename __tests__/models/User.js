const { reset, end } = require("../../server/db-reset");
const User = require("../../server/models/User");

describe("Tests for User Model.", () => {
  beforeAll(done => {
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
  afterAll(() => end());
});
