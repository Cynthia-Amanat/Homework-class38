'use strict';

const getAnonName = (firstName) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const fullName = `${firstName} Doe`;

      if (!firstName) {
        reject(new Error("You didn't pass in a first name!"));
      } else {
        resolve(fullName);
      }
    }, 1000);
  });
};

function main() {
  getAnonName('John').then((fullName) => console.log(fullName));
}

if (process.env.NODE_ENV !== 'test') {
  main();
}
module.exports = getAnonName;
