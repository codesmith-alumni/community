/* eslint-disable no-undef */
var request = require('supertest');
var _a = require('../server/db-reset'), reset = _a.reset, end = _a.end;
var server = 'http://localhost:3000';
describe('Server Tests', function () {
    beforeAll(function () { return reset(); });
    it('returns an HTML file at root /', function () { return request(server)
        .get('/')
        .expect('Content-Type', /text\/html/); });
    describe('postController', function () {
        describe('GET /posts with no parameters', function () {
            it('returns JSON with status code 200', function () { return request(server)
                .get('/posts')
                .expect('Content-Type', /application\/json/)
                .expect(200); });
            it('returns an array of all posts as JSON at /posts', function () { return request(server)
                .get('/posts')
                .expect(function (response) {
                if (!Array.isArray(response.body))
                    throw new Error('Response body is not an array');
            }); });
        });
        describe('GET /posts/:company', function () {
            it('returns JSON with status code 200', function () { return request(server)
                .get('/posts/codesmith')
                .expect('Content-Type', /application\/json/)
                .expect(200); });
            it('returns a filtered array of posts', function () { return request(server)
                .get('/posts/codesmith')
                .expect(function (response) {
                if (!Array.isArray(response.body))
                    throw new Error('Response body is not an array');
                response.body.forEach(function (item) {
                    if (!item.company.includes('codesmith'))
                        throw new Error('Response includes companies without search term');
                });
            }); });
            it('returns an empty array if there are no matches', function () { return request(server)
                .get('/posts/ouygwraiwjepoi')
                .expect(function (response) {
                if (!Array.isArray(response.body))
                    throw new Error('Response body is not an array');
                response.body.length === 0;
            }); });
        });
        describe('POST /posts', function () {
            it('returns status code 200', function () { return request(server)
                .post('/posts')
                .send({
                user_id: 1,
                company: 'codesmith',
                content: 'here is a post',
            })
                .expect('Content-Type', /application\/json/)
                .expect(200); });
            it('returns the new post that was added to the database', function () { return request(server)
                .post('/posts')
                .send({
                user_id: 1,
                company: 'codesmith',
                content: 'here is a post',
            })
                .set('Accept', 'application/json')
                .expect(function (response) {
                var body = response.body;
                if (typeof body !== 'object')
                    throw new Error('Response should be an object');
                if (!body.hasOwnProperty('user_id'))
                    throw new Error('Response should have user ID');
                if (!body.hasOwnProperty('company'))
                    throw new Error('Response should have company');
                if (!body.hasOwnProperty('content'))
                    throw new Error('Response should have content');
            }); });
        });
    });
    // TODO
    describe('/signup endpoint', function () {
        it('POST creates a new user if email does not exist', function () { return request(server)
            .post('/auth/signup')
            .send({
            name: 'Abby',
            email: 'abby@teamcharizard.com',
            password: 'codesmithrocks'
        })
            .expect(function (response) {
            var body = response.body;
            if (typeof body !== 'object')
                throw new Error('Response should be an object');
            if (!body.hasOwnProperty('id'))
                throw new Error('Response should have user ID');
        }); });
        xit('POST returns an error if email already exists', function () { return request(server)
            .post('/users')
            .send({
            name: 'A different person',
            email: 'abby@teamcharizard.com',
            password: 'ilovetesting',
        })
            .expect(function (response) {
            var body = response.body;
            console.log(body);
        }); });
    });
    afterAll(function () {
        end();
    });
});
//# sourceMappingURL=serverTests.js.map