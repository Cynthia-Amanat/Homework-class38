/* eslint-disable hyf/no-commented-out-code */
'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/blob/main/3-UsingAPIs/Week2/README.md#exercise-4-dice-race

1. Complete the function `rollDice()` by using `.map()` on the `dice` array 
   to create an array of promises for use with `Promise.race()`.
2. Refactor the function `main()` using async/await and try/catch.
3. Once you got this working, you may observe that some dice continue rolling 
   for some undetermined time after the promise returned by `Promise.race()` 
   resolves. Do you know why? Add your answer as a comment to the bottom of the 
   file.
------------------------------------------------------------------------------*/
// ! Do not remove this line
const rollDie = require('../../helpers/pokerDiceRoller');

function rollDice() {
  const dice = [1, 2, 3, 4, 5];
  const raceDice = dice.map(rollDie);
  return Promise.race(raceDice);
}

async function main() {
  try {
    const results = await rollDice();
    console.log('Resolved', results);
  } catch (error) {
    console.log('Rejected', error.message);
  }
}

if (process.env.NODE_ENV !== 'test') {
  main();
}
module.exports = rollDice;

// Promise.race() work as its name race it will returns a promise that resolve or rejects
//  as soon as one of the promises in an array resolve or rejects,
//  with the value  from that promise.
