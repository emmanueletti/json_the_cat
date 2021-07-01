const expect = require('chai').expect;
const breedFetcher = require('../breedFetcher');

describe('breedFetcher async function', () => {
  it('should return a JSON body string', () => {
    const breedQuery = 'Siberian';
    return breedFetcher().then((result) => {
      expect(result.body).to.be.a('string');
    });
  });

  it('should pass user query on to next chained function', () => {
    const breedQuery = 'Siberian';
    return breedFetcher(breedQuery).then((result) => {
      expect(result.query).to.equal(breedQuery);
    });
  });

  it('should pass user query on to next chained function without manipulation', () => {
    const breedQuery = 'SIBErian';
    return breedFetcher(breedQuery).then((result) => {
      expect(result.query).to.equal(breedQuery);
    });
  });
  // end of describe
});
