var _a = require("../../server/db-reset"), reset = _a.reset, end = _a.end;
var User = require("../../server/models/User");
var pool = require("../../server/database");
describe("Tests for User Model.", function () {
    beforeAll(function (done) {
        reset().then(function () { return done(); });
    });
    afterEach(function (done) {
        reset().then(function () { return done(); });
    });
    it("User saves into the database.", function (done) {
        var user = new User("Ian", "test@test.com", "password");
        try {
            var res = user
                .save()
                .then(function (res) {
                expect(res.rows.length).toBe(1);
                done();
            })
                .catch(function (err) {
                throw new Error("Save operation failed:", err);
            });
        }
        catch (err) {
            throw new Error("Save operation failed:", err);
        }
    });
    describe("Tests for user", function () {
        beforeAll(function (done) {
            pool
                .query("INSERT INTO users(name, email, password, karma) VALUES($1, $2, $3,$4)", ["test", "test@test.com", "testpass", 0])
                .then(function () {
                done();
            })
                .catch(function () {
                done();
            });
        });
        it("Validates User with right password.", function (done) {
            var user = new User("test", "test@test.com", "testpass");
            user
                .validateUser()
                .then(function (res) {
                expect(res.rows.length).toBeGreaterThan(0);
                done();
            })
                .catch(function (err) {
                throw err;
            });
        });
        it("Properly validates User with wrong password.", function (done) {
            var user = new User("testy", "test@test.com", "testpass");
            user
                .validateUser()
                .then(function (res) {
                expect(res.rows.length).toBe(0);
                done();
            })
                .catch(function (err) {
                throw err;
            });
        });
    });
    afterAll(function () { return end(); });
});
//# sourceMappingURL=User.js.map