const request = require('supertest');
const server = 'http://localhost:3000';

describe('Server', () => {
  it('Returns an HTML file at root /', () => {
    return request(server)
      .get('/')
      .expect('Content-Type', /html/)
  });
});
