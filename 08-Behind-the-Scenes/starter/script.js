'use strict';
// // function calcAge(birthYear) {
// //   const age = 2037 - birthYear;
// //   function printAge() {
// //     const output = `You are ${age}, born in ${birthYear}`;
// //     console.log(output);

// //     if (birthYear >= 1981 && birthYear <= 1996) {
// //         var str = `Oh, you are a millenial, ${firstName}`;
// //     }
// //     console.log(str);

// //     // function add(a, b) {
// //     //   return a + b;
// //     // }
// //     // add(43 + 23);
// //   }
// //   printAge();
// //   return age;
// // }

// // const firstName = 'Jonas';

// // calcAge(1991);

// console.log(me);
// // console.log(job);
// // console.log(year);

// var me = 'Jonas';
// let job = 'teacher';
// const year = 1991;

// console.log(addDecl(2, 3));
// console.log(addExpr(2, 4));
// console.log(addArrow(2, 5));

// function addDecl(a, b) {
//   return a + b;
// }

// const addExpr = function (a, b) {
//   return a + b;
// };

// var addArrow = (a, b) => a + b;

//
let lastName = 'Williams';
let OldLastName = lastName;
lastName = 'Davis';
console.log(lastName, OldLastName);

const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};
const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before marriage:', jessica);
console.log('After marriage:', marriedJessica);

const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('Jonh');

console.log('Before marriage:', jessica2);
console.log('After marriage:', jessicaCopy);
