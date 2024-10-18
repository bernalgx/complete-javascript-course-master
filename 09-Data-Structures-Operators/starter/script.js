// 'use strict';

// // // Data needed for a later exercise
// // const flights =
// //   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// // Data needed for first part of the section
// const openingHours = {
//   [weekdays[3]]: {
//     open: 12,
//     close: 22,
//   },
//   [weekdays[4]]: {
//     open: 11,
//     close: 23,
//   },
//   [weekdays[5]]: {
//     open: 0, // Open 24 hours
//     close: 24,
//   },
// };

// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   // ES6 enhanced object literals
//   openingHours,

//   order(starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },

//   orderDelivery({ starterIndex, mainIndex, time, address }) {
//     // console.log(
//     //   `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu.mainIndex} will be delivered at ${time}`
//     // );
//   },

//   orderPasta(ing1, ing2, ing3) {
//     console.log(`Here is your delicious pasta with ${ing1} ${ing2} ${ing3}`);
//   },

//   orderPizza(mainIngredient, ...otherIngredients) {
//     console.log(mainIngredient);
//     console.log(otherIngredients);
//   },
// };

// const properties = Object.keys(openingHours);
// // console.log(properties);

// // console.log(`We are open on ${properties.length} days`);

// let openStr = `We are open on ${properties.length} days `;

// // for (const day of Object.keys(openingHours)) {
// //   console.log(day);
// // }

// for (const day of properties) {
//   openStr += `${day}, `;
// }

// // console.log(openStr);

// const values = Object.values(openingHours);
// // console.log(values);

// const entries = Object.entries(openingHours);
// // console.log(entries);

// // for (const [key, { open, close }] of entries) {
// //   console.log(`On ${key} we open at ${open} and close at${close}`);
// // }

// // restaurant.openingHours.mon && console.log(restaurant.openingHours.mon.open);

// // console.log(restaurant?.openingHours?.mon?.open);
// // const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// // for (const day of days) {
// //   const open = restaurant.openingHours[day]?.open ?? 'Closed';
// //   console.log(`On ${day}, we open at ${open} `);
// // }

// // console.log(restaurant.order?.(0, 1) ?? 'method does not exists');
// // console.log(restaurant.orderRissotto?.(0, 1) ?? 'method does not exists');

// // //real world ecamples
// // const newRestaurant = { ...restaurant, founder: 'guiseppe' };
// // console.log(newRestaurant);

// // const restaurantCopy = { ...restaurant };
// // restaurantCopy.name = 'Ristorante Roma';
// // console.log(restaurantCopy.name);
// // console.log(restaurant.name);

// // // const ingredients = [
// // //   prompt("Let's make pasta! Ingredient 1?"),
// // //   prompt('Ingredient 2?'),
// // //   prompt('Ingredient 3?'),
// // // ];
// // // console.log(ingredients);

// // // restaurant.orderPasta(...ingredients);

// // // const arr = [7, 8, 9];
// // // const badNewArray = [1, 2, arr[0], arr[1], arr[2]];
// // // console.log(badNewArray);

// // // const newArr = [1, 2, ...arr];
// // // console.log(newArr);

// // // console.log(...newArr);

// // // const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// // // console.log(newMenu);

// // // const mainNewMenu = [...restaurant.mainMenu];

// // // const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// // // console.log(menu);

// // // const str = 'Jonas';
// // // const letters = [...str, ' ', 's.'];
// // // console.log(letters);
// // // console.log(...str);

// // // restaurant.orderDelivery({
// // //   time: '22:30',
// // //   address: 'Vial del Sole, 21',
// // //   mainIndex: 2,
// // //   starterIndex: 2,
// // // });

// // // // const arr = [2, 3, 4];
// // // // const a = [0];
// // // // const b = [1];
// // // // const c = [2];

// // // // const [x, y, z] = arr;
// // // // console.log(x, y, z);
// // // // console.log(arr);

// // // let [main, , secundary] = restaurant.categories;
// // // // console.log(main, secundary);

// // // const temp = main;
// // // main = secundary;
// // // secundary = temp;
// // // // console.log(main, secundary);

// // // [main, secundary] = [secundary, main];
// // // // console.log(main, secundary);

// // // const [starter, mainCourse] = restaurant.order(2, 0);
// // // // console.log(starter, mainCourse);

// // // const nested = [2, 4, [5, 6]];
// // // const [i, , [j, k]] = nested;
// // // // console.log(i, j, k);
// // // //
// // // //default values
// // // const [p = 1, q = 1, r = 1] = [8, 9];
// // // // console.log(p, q, r);

// // // const { name, openingHours, categories } = restaurant;

// // // const {
// // //   name: restaurantName,
// // //   openingHours: hours,
// // //   categories: tags,
// // // } = restaurant;
// // // // console.log(name, openingHours, categories);

// // // const { menu = [], starterMenu: starters = [] } = restaurant;
// // // // console.log(menu, starters);

// // // let a = 111;
// // // let b = 999;
// // // const obj = { a: 23, b: 7, c: 14 };

// // // ({ a, b } = obj);
// // // // console.log(a, b);
// // // // nested Objects

// // // const {
// // //   fri: { open: o, close: c },
// // // } = openingHours;
// // // // console.log(o, c);

// // //destructuring

// // const arr = [1, 2, ...[3, 4]];

// // //rest, because on left side of
// // const [a, b, ...others] = [1, 2, 3, 4, 5];

// // console.log(a, b, others);

// // const [pizza, , risotto, ...otherFood] = [
// //   ...restaurant.mainMenu,
// //   ...restaurant.starterMenu,
// // ];

// // console.log(pizza, risotto, otherFood);
// // const { sat, ...weekdays } = restaurant.openingHours;
// // console.log(weekdays);

// // const add = function (...numbers) {
// //   let sum = 0;
// //   for (let i = 0; i < numbers.length; i++) sum += numbers[i];
// //   console.log(sum);
// // };
// // add(2, 3);
// // add(5, 3, 7, 2);
// // add(8, 2, 5, 3, 2, 1, 4);

// // const x = [23, 5, 7];
// // add(...x);

// // restaurant.orderPasta('mushroons', 'onions', 'olives', 'spichach');
// // restaurant.orderPizza('mushrooms');

// // console.log('----------OR----------');
// // console.log(3 || 'jonas');
// // console.log('' || 'jonas');
// // console.log(true || 0);
// // console.log(undefined || null);

// // restaurant.numGuest = 23;
// // const guests1 = restaurant.numGuest ? restaurant.numGuest : 10;
// // console.log(guests1);

// // const guest2 = restaurant.numGuest || 10;
// // console.log(guest2);
// // console.log('----------AND----------');

// // console.log(7 && 'Jonas');
// // console.log('Hello' && null);

// // if (restaurant.orderPizza) {
// //   restaurant.orderPizza('mushrooms', 'spinach');
// // }

// // restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

// // Data Structures, Modern Operators and Strings

// // Coding Challenge #1
// // We're building a football betting app (soccer for my American friends �)!
// // Suppose we get data from a web service about a certain game ('game' variable on
// // next page). In this challenge we're gonna work with that data.
// // Your tasks:
// // 1. Create one player array for each team (variables 'players1' and
// // 'players2')
// // 2. The first player in any player array is the goalkeeper and the others are field
// // players. For Bayern Munich (team 1) create one variable ('gk') with the
// // goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10
// // field players
// // 3. Create an array 'allPlayers' containing all players of both teams (22
// // players)
// // 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a
// // new array ('players1Final') containing all the original team1 players plus
// // 'Thiago', 'Coutinho' and 'Perisic'
// // 5. Based on the game.odds object, create one variable for each odd (called
// // 'team1', 'draw' and 'team2')
// // 6. Write a function ('printGoals') that receives an arbitrary number of player
// // names (not an array) and prints each of them to the console, along with the
// // number of goals that were scored in total (number of player names passed in)
// // 7. The team with the lower odd is more likely to win. Print to the console which
// // team is more likely to win, without using an if/else statement or the ternary
// // operator.
// // Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'.
// // Then, call the function again with players from game.scored

// // // 1. Create one player array for each team (variables 'players1' and
// // // 'players2')

// // const players1 = [...game.players[0]];
// // const players2 = [...game.players[1]];
// // // console.log(players1);

// // // 2. The first player in any player array is the goalkeeper and the others are field
// // // players. For Bayern Munich (team 1) create one variable ('gk') with the
// // // goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10
// // // field players

// // function goalKeeper(gk, ...otherPlayers) {
// //   return gk;
// // }
// // function fieldPlayers(gk, ...otherPlayers) {
// //   return otherPlayers;
// // }
// // console.log('--Goal Keepers--');
// // console.log(goalKeeper(...game.players[0]));
// // console.log(goalKeeper(...game.players[1]));
// // console.log('--Field Players--');
// // console.log(fieldPlayers(...game.players[0]));
// // console.log(fieldPlayers(...game.players[1]));

// // // 3. Create an array 'allPlayers' containing all players of both teams (22
// // // players)

// // const allPlayers = [...game.players[0], ...game.players[1]];
// // console.log(`--All Players--
// // ${allPlayers}`);

// // // 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a
// // // new array ('players1Final') containing all the original team1 players plus
// // // 'Thiago', 'Coutinho' and 'Perisic'

// // const players1Final = [...game.players[0], 'Thiago', 'Coutinho', 'Perisic'];
// // console.log('--Bayern Munich players Final--');
// // console.log(players1Final);

// // // 5. Based on the game.odds object, create one variable for each odd (called
// // // 'team1', 'draw' and 'team2')
// // // 6. Write a function ('printGoals') that receives an arbitrary number of player
// // // names (not an array) and prints each of them to the console, along with the
// // // number of goals that were scored in total (number of player names passed in)
// // // 7. The team with the lower odd is more likely to win. Print to the console which
// // // team is more likely to win, without using an if/else statement or the ternary
// // // operator.
// // // Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'.
// // // Then, call the function again with players from game.scored

// // console.log('--Print Goals--');
// // const printGoals = function (...any) {
// //   return console.log(...any, any.length);
// // };

// // printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// // printGoals(...game.scored);

// // // 7. The team with the lower odd is more likely to win. Print to the console which
// // // team is more likely to win, without using an if/else statement or the ternary
// // // operator.

// // game.odds.team1 > game.odds.team2 && console.log('team 2 wins');
// // game.odds.team1 < game.odds.team2 && console.log('team 1 wins');

// // const [players1, players2] = game.players;
// // console.log(players1, players2);

// // const [gk, ...fieldPlayers] = players1;
// // console.log(gk, fieldPlayers);

// // const game = {
// //   team1: 'Bayern Munich',
// //   team2: 'Borrussia Dortmund',
// //   players: [
// //     [
// //       'Neuer',
// //       'Pavard',
// //       'Martinez',
// //       'Alaba',
// //       'Davies',
// //       'Kimmich',
// //       'Goretzka',
// //       'Coman',
// //       'Muller',
// //       'Gnarby',
// //       'Lewandowski',
// //     ],
// //     [
// //       'Burki',
// //       'Schulz',
// //       'Hummels',
// //       'Akanji',
// //       'Hakimi',
// //       'Weigl',
// //       'Witsel',
// //       'Hazard',
// //       'Brandt',
// //       'Sancho',
// //       'Gotze',
// //     ],
// //   ],
// //   score: '4:0',
// //   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
// //   date: 'Nov 9th, 2037',
// //   odds: {
// //     team1: 1.33,
// //     x: 3.25,
// //     team2: 6.5,
// //   },
// // };

// // Coding Challenge #2
// // Let's continue with our football betting app! Keep using the 'game' variable from
// // before.
// // Your tasks:
// // 1. Loop over the game.scored array and print each player name to the console,
// // along with the goal number (Example: "Goal 1: Lewandowski")
// // 2. Use a loop to calculate the average odd and log it to the console (We already
// // studied how to calculate averages, you can go check if you don't remember)
// // 3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
// // Odd of victory Bayern Munich: 1.33
// // Odd of draw: 3.25
// //  Odd of victory Borrussia Dortmund: 6.5
// // Get the team names directly from the game object, don't hardcode them
// // (except for "draw"). Hint: Note how the odds and the game objects have the
// // same property names �
// // 4. Bonus: Create an object called 'scorers' which contains the names of the
// // players who scored as properties, and the number of goals as the value. In this
// // game, it will look like this:
// // {
// //   Gnarby: 1,
// //   Hummels: 1,
// //   Lewandowski: 2
// // }

// // GOOD LUCK �

// // const goals = game.scored;

// // for (const [i, player, SD] of goals.entries()) {
// //   console.log(`Goal ${i + 1} : ${player}`);
// // }

// // const odds = Object.values(game.odds);

// // average = 0;
// // for (const odd of odds) average += odd;
// // average /= odds.length;
// // console.log(average);

// // debugger;
// // for (const [team, Odd] of Object.entries(game.odds)) {
// //   const teamStr = team === 'x' ? 'Draw' : `Victory ${game[team]}`;
// //   console.log(`Odd of  ${teamStr} ${Odd}`);
// // }
// // const goals = game.scored;
// // const odds = game.odds;

// // const calcOdds = function (win, draw, loss) {
// //   const average = (win + draw + loss) / 3;
// //   return average;
// // };

// // for (const i of goals.entries()) {
// //   console.log(`Goal ${i[0] + 1} : ${i[1]}`);
// //   // }
// // }

// // //2

// // const win = odds.team1;
// // const draw = odds.x;
// // const loss = odds.team2;

// // // console.log(win, draw, loss);

// // console.log(`2==${calcOdds(win, draw, loss)}`);
// // //3

// // console.log(`Odd of victory ${game.team1}: ${win}
// // Odd of draw: ${draw}
// // Odd of victory ${game.team2}: ${loss}
// // `);

// // const scorers = {
// //   Gnarby: 1,
// //   Hummels: 1,
// //   Lewandowski: 2,
// // };

// // console.log(scorers);

// // const orderSet = new Set([
// //   'Pasta',
// //   'Pizza',
// //   'Pizza',
// //   'Rissotto',
// //   'Pasta',
// //   'Pizza',
// // ]);
// // console.log(orderSet);

// // const rest = new Map();

// // rest.set(true, 'Holis');
// // rest.set(false, 'Bye');

// // console.log(rest);

// // Coding Challenge #3
// // Let's continue with our football betting app! This time, we have a map called
// // 'gameEvents' (see below) with a log of the events that happened during the
// // game. The values are the events themselves, and the keys are the minutes in which
// // each event happened (a football game has 90 minutes plus some extra time).
// // Your tasks:
// // 1. Create an array 'events' of the different game events that happened (no
// // duplicates)
// // 2. After the game has finished, is was found that the yellow card from minute 64
// // was unfair. So remove this event from the game events log.
// // 3. Compute and log the following string to the console: "An event happened, on
// // average, every 9 minutes" (keep in mind that a game has 90 minutes)
// // 4. Loop over 'gameEvents' and log each element to the console, marking
// // whether it's in the first half or second half (after 45 min) of the game, like this:
// // [FIRST HALF] 17:
// // ⚽
// //  GOAL

// // GOOD LUCK �

// // const gameEvents = new Map([
// //   [17, '⚽ GOAL'],
// //   [36, '� Substitution'],
// //   [47, '⚽ GOAL'],
// //   [61, '� Substitution'],
// //   [64, '� Yellow card'],
// //   [69, '� Red card'],
// //   [70, '� Substitution'],
// //   [72, '� Substitution'],
// //   [76, '⚽ GOAL'],
// //   [80, '⚽ GOAL'],
// //   [92, '� Yellow card'],
// // ]);

// // // 1. Create an array 'events' of the different game events that happened (no
// // // duplicates)

// // const events = [...new Set(gameEvents.values())];

// // console.log(events);

// // // 2. After the game has finished, is was found that the yellow card from minute 64
// // // was unfair. So remove this event from the game events log.
// // gameEvents.delete(64);
// // console.log(gameEvents.values());

// // // 3. Compute and log the following string to the console: "An event happened, on
// // // average, every 9 minutes" (keep in mind that a game has 90 minutes)

// // const average = 90 / gameEvents.size;
// // console.log(average);

// // // 4. Loop over 'gameEvents' and log each element to the console, marking
// // // whether it's in the first half or second half (after 45 min) of the game, like this:
// // // [FIRST HALF] 17:

// // for (const [key, value] of gameEvents)
// //   key < 45
// //     ? console.log(`[FIRST HALF] ${key}`)
// //     : console.log(`[SECOND HALF] ${key}`);

// // const airLine = 'Tap Air Portugal';
// // const plane = 'A320';
// // console.log(plane[0]);
// // console.log(plane[1]);
// // console.log(plane[2]);
// // console.log(plane[3]);

// // console.log('B737');

// // console.log(airLine.indexOf('r'));

// // console.log(airLine.slice(6, 10));

// // console.log(airLine.slice(-6));

// // const checkMiddleSeat = function (seat) {
// //   const s = seat.slice(-1);
// //   if (s === 'B' || s === 'E') console.log('You got middle seat =(');
// //   else console.log('You got lucky');
// // };

// // checkMiddleSeat('11B');
// // checkMiddleSeat('23C');
// // checkMiddleSeat('3E');

// // console.log(new String('Jonas'));

// // const passenger = 'jOnAs';
// // const passengerLower = passenger.toLowerCase();
// // const passengerCorrect =
// //   passengerLower[0].toUpperCase() + passengerLower.slice(1);
// // console.log(passengerCorrect);

// // //comparing email
// // const email = 'hello@jonas.io';
// // const loginEmail = '  Hello@jonas.io \n';

// // const lowerEmail = loginEmail.toLowerCase();
// // const trimmedEmail = lowerEmail.trim();

// // const normalizedEmail = email.toLowerCase().trim();
// // console.log(normalizedEmail);

// // const priceGB = '288,97';
// // const priceUS = priceGB.replace(',', '.');
// // console.log(priceUS);

// // const announcement =
// //   'All passengers come to boarding door 23. Boarding door 23!';
// // console.log(announcement.replace(/door/g, 'Gate'));

// //Bolleans
// const plane = 'Airbus A320neo';

// console.log(plane.includes('A320'));
// console.log(plane.includes('Boeing'));
// console.log(plane.startsWith('Airb'));

// if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
//   console.log('Part of the NEW Airbus family');
// }

// const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ');

// newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
// console.log(newName);

// const passenger = 'jessica ann smith davis';

// const capitalizeName = function (name) {
//   const names = name.split(' ');
//   const namesUpper = [];
//   for (const n of names) {
//     namesUpper.push(n[0].toUpperCase() + n.slice(1));
//   }
//   console.log(namesUpper.join(' '));
// };

// capitalizeName('Bernal gutierrez vargas');

// const message = 'Go to gate 23!';
// console.log(message.padStart(25, '+').padEnd(35, '+'));

// const maskCreditCard = function (number) {
//   const str = number + '';
//   const last = str.slice(-4);
//   return last.padStart(str.length, '*');
// };

// console.log(maskCreditCard(827462387));

// const message2 = 'Bad weather... all departues delayed...';
// console.log(message2.repeat(2));

// // Coding Challenge #4
// // Write a program that receives a list of variable names written in underscore_case
// // and convert them to camelCase.
// // The input will come from a textarea inserted into the DOM (see code below to
// // insert the elements), and conversion will happen when the button is pressed.
// // Test data (pasted to textarea, including spaces):
// // underscore_case
// //  first_name
// // Some_Variable
// //   calculate_AGE
// // delayed_departure
// // Should produce this output (5 separate console.log outputs):
// // underscoreCase      ✅
// // firstName           ✅✅
// // someVariable        ✅✅✅
// // calculateAge        ✅✅✅✅
// // delayedDeparture    ✅✅✅✅✅
// // Hints:
// // § Remember which character defines a new line in the textarea �
// // § The solution only needs to work for a variable made out of 2 words, like a_b
// // § Start without worrying about the ✅. Tackle that only after you have the variable
// // name conversion working �
// // § This challenge is difficult on purpose, so start watching the solution in case
// // you're stuck. Then pause and continue!

// // Afterwards, test with your own test data!

// // GOOD LUCK �

// document.body.append(document.createElement('textarea'));

// document.querySelector('textarea').textContent = `underscore_case
// first_name
// Some_Variable
// calculate_AGE
// delayed_departure`;

// document.body.append(document.createElement('button'));

// const changeText = function (str) {};

// document.querySelector('button').addEventListener('click', function () {
//   a();
// });

// const a = function () {
//   const text = document.querySelector('textarea').value;

//   const textSplitArr = text.split('\n');

//   for (const [i, row] of textSplitArr.entries()) {
//     const [first, second] = row.toLocaleLowerCase().trim().split('_');
//     console.log(
//       `${first}${second[0].toUpperCase()}${second.slice(1)}${first.padEnd(
//         15
//       )} ${'✅'.repeat(Number(i) + 1)}`
//     );

//     // document.querySelector('textarea').textContent =
//     //   palabrasCamelCase.join('\n');
//   }
// };

// // const FFF = function (name) {
// //   const names = name.split(' ');
// //   const namesUpper = [];
// //   const camelCase = '';
// //   for (const n of names) {
// //     console.log();
// //   }
// //   // console.log(namesUpper.join(' '));
// //   console.log(namesUpper);
// // };

// /*
// underscore_case
// first_name
// Some_Variable
// calculate_AGE
// delayed_departure
// */

// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// // 🔴 Delayed Departure from FAO to TXL (11h25)
// //              Arrival from BRU to FAO (11h45)
// //   🔴 Delayed Arrival from HEL to FAO (12h05)
// //            Departure from FAO to LIS (12h30)

// console.log(flights.split('+'));

// const getCode = str => str.slice(0, 3).toLocaleUpperCase();

// for (const flight of flights.split('+')) {
//   let flightInfo = flight.split(';');
//   const [type, from, to, time] = flight.split(';');
//   const output = `${type.startsWith('_Delayed') ? '🔴' : ''} ${type.replaceAll(
//     '_',
//     ' '
//   )} from ${getCode(from)} to ${getCode(to)} (${time.replace(
//     ';',
//     'h'
//   )})`.padStart(50, '-');

//   console.log(output);
// }

// function findEvenIndex(...arr) {
//   // function add(accumulator, a) {
//   //   return accumulator + a;
//   // }
//   let leftSide = 0;
//   let rightSide = 0;
//   let found = false;
//   let IndexFound = 0;

//   for (let i = 0; i <= arr.length - 1; i++) {
//     let leftSide = [];
//     let rightSide = [];
//     leftSide = arr.slice(0, i);
//     rightSide = arr.slice(i + 1, arr.length);

//     let sumLeft = [...leftSide].reduce((partial_sum, a) => partial_sum + a, 0);

//     let sumRight = [...rightSide].reduce(
//       (partial_sum, a) => partial_sum + a,
//       0
//     );

//     if (sumLeft === sumRight) {
//       IndexFound = i;
//       break;
//     } else {
//       IndexFound = -1;
//     }
//   }
//   return IndexFound;
//   //   if (found && IndexFound != 0) {
//   //     return IndexFound;
//   //   } else {
//   //     return -1;
//   //   }
// }

// // const sum = [1, 2, 3].reduce((partial_sum, a) => partial_sum + a, 0);
// // console.log(sum); // 6

// function findEvenIndex(arr) {
//   var sum = 0,
//     leftSum = 0;

//   for (var i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }

//   for (var i = 0; i < arr.length; i++) {
//     sum -= arr[i];

//     if (leftSum === sum) {
//       return i;
//     }

//     leftSum += arr[i];
//   }

//   return -1;
// }
// console.log(findEvenIndex(20, 10, -80, 10, 10, 15, 35));

// function countSmileys(arr) {
//   if (arr.includes(':', ';', '-', '~', ')', 'D')) {
//     console.log(true);
//   }
// }

// countSmileys(':D', ':~)', ';~D', ':)');
