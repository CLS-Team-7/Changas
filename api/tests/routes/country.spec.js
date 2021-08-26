/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Country, conn } = require('../../src/db.js');

const agent = session(app);
const country = {
  name: 'Argentina',
};

describe('Country routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  //============ GET ============================
  describe('GET /countries', () => {
    it('should get 200', () =>
      agent.get('/countries').expect(200)
    );
    it('should get Country Argentina', () =>
      agent.get('/countries/ARG')
      .then(res => {
        expect(res.body.name).to.be.equal('Argentina');
      })
    );
    it('should get Country Brazil', () =>
      agent.get('/countries/BRA')
      .then(res => {
        expect(res.body.name).to.be.equal('Brazil');
      })
    );
    it('should get Country Query Error', () =>
      agent.get('/countries?name=ioweruwer')
      .then(res => {
        expect(res.body).to.be.equal('Country not found, try again.');
      })
    );
    it('should get Country Query', () =>
      agent.get('/countries?name=uru')
      .then(res => {

        expect(res.body).to.be.a('array');
      })
    );
  });
});

describe('Country routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));


  //============ POST ============================
  describe('POST /activity', () => {
    it('should post an activity in Argentina and Spain', () =>
      agent.post('/activity')
      .send({
        name: 'Testing 123',
        season: 'Summer',
        difficulty: 3,
        duration: 2.5,
        countryId: ['ARG', 'ESP'],
      })
      .then(res => {
        expect(res.body.name).to.be.equal('Testing 123');
      })
    );
  });
});