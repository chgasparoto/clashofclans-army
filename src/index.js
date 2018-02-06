const clashOfClansArmy = require('./clashofclans-army.json');
const uniqueRandomArray = require('unique-random-array');

module.exports = {
  all: clashOfClansArmy,
  random: uniqueRandomArray(clashOfClansArmy),
};
