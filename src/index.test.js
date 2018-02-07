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
    it('should contain a random element from clashOfClans.all', function() {
      const troop = clashOfClans.random();
      expect(clashOfClans.all).to.include(troop);
    });
  });
});
