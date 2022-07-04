'use strict';

const getAnonName = (firstname) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const fullName = `${firstname} Doe`;

      if (!firstname) {
        reject(new Error("You didn't pass in a first name!"));
      } else {
        resolve(fullName);
      }
    }, 1000);
  });
};

function main() {
  getAnonName('John').then((firstname) => console.log(firstname));
}

if (process.env.NODE_ENV !== 'test') {
  main();
}
module.exports = getAnonName;
