'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/1-JavaScript/Week3#exercise-2-dog-years

You know how old your dog is in human years, but what about dog years? Let's
calculate it!

1. Complete the function named `calculateDogAge`.

  - It takes one parameter: your ( fictional) puppy's age (number).
  - Calculate your dog's age based on the conversion rate of 1 human year to
    7 dog years.
  - Return a string: "Your doggie is `age` years old in dog years!"

2. Use `console.log` to display the result of the function for three different
   ages.
-----------------------------------------------------------------------------*/

function calculateDogAge(fictional,number) {
    
  const age = fictional * number;
  return [`Your doggie is ${age} years old in dog years!`];

    

}
console.log(calculateDogAge(1,7));
console.log(calculateDogAge(8,7));
console.log(calculateDogAge(10,7));

function main() {
  console.log(calculateDogAge(1,7)); // -> "Your doggie is 7 years old in dog years!"
  console.log(calculateDogAge(2,7)); // -> "Your doggie is 14 years old in dog years!"
  console.log(calculateDogAge(3,7)); // -> "Your doggie is 21 years old in dog years!"
}

// ! Do not change or remove the code below
if (process.env.NODE_ENV !== 'test') {
  main();
}
module.exports = calculateDogAge;
