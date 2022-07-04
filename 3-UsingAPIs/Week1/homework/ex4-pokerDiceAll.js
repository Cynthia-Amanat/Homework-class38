const rollDie = require('../../helpers/pokerDiceRoller');

function rollDice() {
  const dice = [1, 2, 3, 4, 5];
  return rollDie(1);
  const dicePromise = dice.map(value);
  return Promise.all(dicePromise);
}
function main() {
  rollDice()
    .then((results) => console.log('Resolved!', results))
    .catch((error) => console.log('Rejected!', error.message));
}

// ! Do not change or remove the code below
if (process.env.NODE_ENV !== 'test') {
  main();
}
module.exports = rollDice;

// If any of the passed-in promises reject, Promise.all
// asynchronously rejects with the value of the promise that rejected,
// whether or not the other promises have resolved.
