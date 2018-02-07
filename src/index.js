import uniqueRandomArray from 'unique-random-array';
import clashOfClansArmy from './clashofclans-army.json';

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
