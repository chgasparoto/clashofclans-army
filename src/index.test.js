const expect = require('chai').expect;
const clashOfClans = require('./index');

describe('clashofclans-army', function() {
  describe('all', function() {
    it('should be an array of strings', function() {
      expect(clashOfClans.all).to.satisfy(isArrayOfStrings);

      function isArrayOfStrings(array) {
        return array.every(function(item) {
          return typeof item === 'string';
        });
      }
    });

    it('should contain `Archer Queen`', function() {
      expect(clashOfClans.all).to.include('Archer Queen');
    });
  });

  describe('random', function() {
    it('should return a random item from clashOfClans.all', function() {
      const randomItem = clashOfClans.random();
      expect(clashOfClans.all).to.include(randomItem);
    });

    it('should return an array of random items if passed number', function() {
      const randomItems = clashOfClans.random(3);
      expect(randomItems).to.have.length(3);

      randomItems.forEach(function(item) {
        expect(clashOfClans.all).to.include(item);
      });
    });
  });
});
