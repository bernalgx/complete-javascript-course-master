'use strict';

// const bookings = [];

// const createBooking = function (
//   flightNum,
//   numPassengers = 1,
//   price = 199 * numPassengers
// ) {
//   //   numPassengers = numPassengers || 1;
//   //   price = price || 199;

//   const booking = { flightNum, numPassengers, price };
//   console.log(booking);
//   bookings.push(booking);
// };

// // createBooking('LH123');
// // createBooking('LH123', 2, 800);
// // createBooking('LH123', 2);
// // createBooking('LH123', 89);

// // const flight = 'LH234';
// // const jonas = {
// //   name: 'Jonas Schemdtmann',
// //   passport: 246544664,
// // };

// // const checkIn = function (flightNum, passenger) {
// //   flightNum = 'LH999';
// //   passenger.name = 'Mr. ' + passenger.name;
// //   if (passenger.passport === 247394792) {
// //     alert('Check in');
// //   } else {
// //     alert('Wrong passport');
// //   }
// // };

// // checkIn(flight, jonas);
// // console.log(flight);
// // console.log(jonas);

// // const newPassport = function (person) {
// //   person.passport = Math.trunc(Math.random() * 10000000000000000000000000);
// // };

// // newPassport(jonas);
// // checkIn(flight, jonas);

// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };

// //Higher order function
// const trasnformer = function (str, fn) {
//   console.log(`Original ${str}`);
//   console.log(`Transformed  string: ${fn(str)}`);
//   console.log(`transformed By: ${fn.name}`);
// };

// trasnformer('JavaScript is the best', upperFirstWord);

// //js uses callbacks all the time

// const high5 = function () {
//   console.log('✔️');
// };

// document.body.addEventListener('click', high5);
// ['Jonas', 'Martha', 'Adam'].forEach(high5);

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const greeterHey = greet('Hey');
// greeterHey('Jonas');
// greeterHey('Steven');

// greet('Hello')('Jonas');

// const greetArr = greeting => name => console.log(`${greeting} ${name}`);
// greetArr('Hello')('Jonas');

// const lufthansa = {
//   airline: 'Lufthansa',
//   iataCode: 'LH',
//   bookings: [],
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum}`
//     );
//     this.bookings.push({ flight: `${this.iataCode} ${flightNum}`, name });
//   },
// };

// // lufthansa.book(239, 'Jonas Shmedtmann');
// // lufthansa.book(152, 'Bernal Gutierrez');

// const eurowings = {
//   airline: 'Eurowings',
//   iataCode: 'EW',
//   bookings: [],
// };

// const swiss = {
//   airline: 'Swiss airlines',
//   iataCode: 'LX',
//   bookings: [],
// };

// const book = lufthansa.book;

// book.call(eurowings, 23, 'Sarah wil');

// book.call(lufthansa, 239, 'Mary Cooper');

// book.call(lufthansa, 345, 'Nati');
// book.call(eurowings, 343, 'santi');

// console.log(lufthansa);

// console.log(eurowings);

// book.call(swiss, 158, 'Mauricio');
// console.log(swiss);

//Apply method
// console.log('Apply method');
// const flightData = [583, 'George Cooper'];
// book.apply(swiss, flightData);
// console.log(swiss);

// book.call(swiss, ...flightData);

//Bind method
//

// A Closer Look at Functions

// Coding Challenge #1
// Let's build a simple poll app!
// A poll has a question, an array of options from which people can choose, and an
// array with the number of replies for each option. This data is stored in the starter
// 'poll' object below.
// Your tasks:
// 1. Create a method called 'registerNewAnswer' on the 'poll' object. The
// method does 2 things:
// 1.1. Display a prompt window for the user to input the number of the
// selected option. The prompt should look like this:
// What is your favourite programming language?
// 0: JavaScript
// 1: Python
// 2: Rust
// 3: C++
// (Write option number)
// 1.2. Based on the input number, update the 'answers' array property. For
// example, if the option is 3, increase the value at position 3 of the array by
// 1. Make sure to check if the input is a number and if the number makes
// sense (e.g. answer 52 wouldn't make sense, right?)
// 2. Call this method whenever the user clicks the "Answer poll" button.
// 3. Create a method 'displayResults' which displays the poll results. The
// method takes a string as an input (called 'type'), which can be either 'string'
// or 'array'. If type is 'array', simply display the results array as it is, using
// console.log(). This should be the default option. If type is 'string', display a
// string like "Poll results are 13, 2, 4, 1".
// 4. Run the 'displayResults' method at the end of each
// 'registerNewAnswer' method call.
// 5. Bonus: Use the 'displayResults' method to display the 2 arrays in the test
// data. Use both the 'array' and the 'string' option. Do not put the arrays in the poll
// object! So what should the this keyword look like in this situation?

// Test data for bonus:
// § Data 1: [5, 2, 3]
// § Data 2: [1, 5, 3, 9, 6, 1]
// Hints: Use many of the tools you learned about in this and the last section �

// GOOD LUCK �

// const poll = {
//   question: 'What is your favourite programming language?',
//   options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
//   // This generates [0, 0, 0, 0]. More in the next section!
//   answers: new Array(4).fill(0),
//   registerNewAnswer() {
//     let optionsStr = '';
//     // debugger;
//     for (let i of this.options) {
//       optionsStr = `${optionsStr + i}
//       `;
//     }
//     const selectedOption = prompt(
//       'What is your favourite programming language?' +
//         `
//       ${optionsStr} `
//     );
//     if (selectedOption <= this.options.length - 1 && selectedOption >= 0) {
//       this.answers[selectedOption] += 1;
//     }
//     console.log(this.answers);
//   },
// };

// document
//   .querySelector('.poll')
//   .addEventListener('click', poll.registerNewAnswer.bind(poll));

// const runOnce = function () {
//   console.log('this will never run again');
// };
// runOnce();

// (function () {
//   console.log('This will never run again');
// })();

// (() => console.log('This will also never run again'))();

// const secureBooking = function () {
//   let passengerCount = 0;
//   return function () {
//     passengerCount++;
//     console.log(`${passengerCount} passengers`);
//   };
// };

// const booker = secureBooking();

// booker();
// booker();
// booker();
// console.dir(booker);

// let timer = () => {
//   setTimeout(function () {
//     console.log('1sec');
//   }, 2000);
// };

// timer();

// Your tasks:
// 1. Take the IIFE below and at the end of the function, attach an event listener that
// changes the color of the selected h1 element ('header') to blue, each time
// the body element is clicked. Do not select the h1 element again!
// 2. And now explain to yourself (or someone around you) why this worked! Take all
// the time you need. Think about when exactly the callback function is executed,
// and what that means for the variables involved in this example.
let strColor = 'red';
(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';
  strColor = 'blue';
})();

const body = document.querySelector('body');

body.addEventListener('click', function () {
  if (strColor === 'blue') {
    strColor = 'red';
  } else {
    strColor = 'blue';
  }
  const header = document.querySelector('h1');
  header.style.color = strColor;
});
