/* eslint-disable no-undef */
const request = require('supertest');
const { reset, end } = require('../server/db-reset');

const server = 'http://localhost:3000';

describe('Server Tests', () => {
  beforeAll(() => reset());

  it('returns an HTML file at root /', () => request(server)
    .get('/')
    .expect('Content-Type', /text\/html/));

  describe('postController', () => {
    describe('GET /posts with no parameters', () => {
      it('returns JSON with status code 200', () => request(server)
        .get('/posts')
        .expect('Content-Type', /application\/json/)
        .expect(200));
      it('returns an array of all posts as JSON at /posts', () => request(server)
        .get('/posts')
        .expect((response) => {
          if (!Array.isArray(response.body)) throw new Error('Response body is not an array');
        }));
    });
    describe('GET /posts/:company', () => {
      it('returns JSON with status code 200', () => request(server)
        .get('/posts/codesmith')
        .expect('Content-Type', /application\/json/)
        .expect(200));
      it('returns a filtered array of posts', () => request(server)
        .get('/posts/codesmith')
        .expect((response) => {
          if (!Array.isArray(response.body)) throw new Error('Response body is not an array');
          response.body.forEach(item => {
            if (!item.company.includes('codesmith')) throw new Error('Response includes companies without search term');
          });
        }));
      it('returns an empty array if there are no matches', () => request(server)
        .get('/posts/ouygwraiwjepoi')
        .expect(response => {
          if (!Array.isArray(response.body)) throw new Error('Response body is not an array');
          response.body.length === 0;
        }));
    });
    describe('POST /posts', () => {
      it('returns status code 200', () => request(server)
        .post('/posts')
        .send({
          user_id: 1,
          company: 'codesmith',
          content: 'here is a post',
        })
        .expect('Content-Type', /application\/json/)
        .expect(200));
      it('returns the new post that was added to the database', () => request(server)
        .post('/posts')
        .send({
          user_id: 1,
          company: 'codesmith',
          content: 'here is a post',
        })
        .set('Accept', 'application/json')
        .expect(response => {
          const { body } = response;
          if (typeof body !== 'object') throw new Error('Response should be an object');
          if (!body.hasOwnProperty('user_id')) throw new Error('Response should have user ID');
          if (!body.hasOwnProperty('company')) throw new Error('Response should have company');
          if (!body.hasOwnProperty('content')) throw new Error('Response should have content');
        }));
    });
  });

  // TODO
  describe('/signup endpoint', () => {
    it('POST creates a new user if email does not exist', () => request(server)
      .post('/signup')
      .send({
        name: 'Abby',
        email: 'abby@teamcharizard.com',
        password: 'codesmithrocks'
      })
      .expect((response) => {
        const { body } = response;
        if (typeof body !== 'object') throw new Error('Response should be an object');
        if (!body.hasOwnProperty('id')) throw new Error('Response should have user ID');
      }));
    xit('POST returns an error if email already exists', () => request(server)
      .post('/users')
      .send({
        name: 'A different person',
        email: 'abby@teamcharizard.com',
        password: 'ilovetesting',
      })
      .expect((response) => {
        const { body } = response;
        console.log(body);
      }));
  });

  afterAll(() => {
    end() //.then(() => done());
  });
});
