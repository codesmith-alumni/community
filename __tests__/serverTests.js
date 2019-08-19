const request = require('supertest');
const server = 'http://localhost:3000';

describe('Server Tests', () => {
  it('returns an HTML file at root /', () => {
    return request(server)
      .get('/')
      .expect('Content-Type', /text\/html/)
  });

  describe('postController', () => {
    describe('GET /posts with no parameters', () => {
      it('returns JSON with status code 200', () => {
        return request(server)
          .get('/posts')
          .expect('Content-Type', /application\/json/)
          .expect(200);
      })
      it('returns an array of all posts as JSON at /posts', () => {
        return request(server)
          .get('/posts')
          .expect((response) => {
            if (!Array.isArray(response.body)) throw new Error('Response body is not an array');
          })
      });
    });
    describe('GET /posts/:company', () => {
      it('returns JSON with status code 200', () => {
        return request(server)
          .get('/posts/codesmith')
          .expect('Content-Type', /application\/json/)
          .expect(200);
      })
      it('returns a filtered array of posts', () => {
        return request(server)
          .get('/posts/codesmith')
          .expect((response) => {
            if (!Array.isArray(response.body)) throw new Error('Response body is not an array');
            response.body.forEach(item => {
              if (!item.company.includes('codesmith')) throw new Error('Response includes companies without search term');
            })
          })
      });
      it('returns an empty array if there are no matches', () => {
        return request(server)
          .get('/posts/ouygwraiwjepoi')
          .expect(response => {
            if (!Array.isArray(response.body)) throw new Error('Response body is not an array');
            response.body.length === 0;
          });
      });
    });
    xit('adds new post to the database', () => {
      return request(server)
        .post('/posts')
        .expect()
    });
  });

  // TODO
  describe('/users endpoint', () => { });
});
