'use strict';

const request = require('supertest');
const { expect } = require('chai');
const app = require('../routes');

describe('Groot translater', () => {
  it('GET /groot with a message as query parameter should have a status of 200 and return the received message and the translated message', () => {
    let expectedResponse = {'received': 'somesamplemessages', 'translated': 'I am Groot!'};
    request(app)
      .get('/groot?message=somesamplemessages')
      .expect(200)
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res.body).to.eql(expectedResponse);
      });
  });
  it('GET /groot should have a status of 400 and return the error message', () => {
    let expectedResponse = {'error': 'I am Groot!'};
    request(app)
      .get('/groot')
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res.statusCode).to.equal(400);
        expect(res.body).to.eql(expectedResponse);
      });
  });
});