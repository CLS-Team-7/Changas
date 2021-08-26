const { Country, conn } = require('../../src/db.js');
const { expect } = require('chai');

describe('Country model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('CT Models Test', () => {
    /* beforeEach(() => Country.sync({ force: true })); */
    describe('name', () => {
      it('should return Argentina', () => {
        Country.findOne({ 
          where: {
            name: 'Argentina'
          }
        })
        .then(country => {

          expect(country.name).to.equal('Argentina');
        })
      })
      it('should return England', () => {
        Country.findOne({ 
          where: {
            id: 'ENG'
          }
        })
        .then(country => {

          expect(country.name).to.equal('England');
        })
      })
    });
  });
});
