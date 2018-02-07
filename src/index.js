const clashOfClansArmy = require('./clashofclans-army.json');
const uniqueRandomArray = require('unique-random-array');

const randomItem = uniqueRandomArray(clashOfClansArmy);

module.exports = {
  all: clashOfClansArmy,
  random: random,
};

function random(number) {
  if (number === undefined) {
    return randomItem();
  }

  const randomItems = [];

  for (let i = 0; i < number; i++) {
    randomItems.push(randomItem());
  }

  return randomItems;
}
