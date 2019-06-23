/* eslint-env mocha */

let request = require('supertest')
const app = require('../../app')
const API_ENDPOINT = '/api/v1'

describe('GET /numbers/:number', () => {
  it('responds with json', done => {
    request(app)
      .get(API_ENDPOINT + '/numbers/12.56')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done)
  })
})

describe('GET /numbers/:number', () => {
  it('responds with error 500 when params is not a number', done => {
    request(app)
      .get(API_ENDPOINT + '/numbers/hello')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(500, done)
  })
})
