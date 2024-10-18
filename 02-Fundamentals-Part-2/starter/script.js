'use strict';

// // // // let name = Jonas;

// // // // function logger(name) {
// // // //     console.log(`My name is ${name}`);
// // // // }

// // // // logger();
// // // // logger();
// // // // logger();

// // // function fruitProcessor(apples, oranges) {
// // //     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
// // //     return juice;
// // // }

// // // const applejuice = fruitProcessor(5, 0);
// // // console.log(applejuice);
// // // console.log(fruitProcessor(10, 11));

// // // const appleOrangeJuice = fruitProcessor(1, 4)
// // // console.log(appleOrangeJuice);

// // // function calcAge1(birthdayYear) {
// // //     return 2037 - birthdayYear;
// // // }

// // // const age1 = calcAge1(1991);
// // // console.log(age1);


// // // // function expressions
// // // const calcAge2 = function (birthYeah) {
// // //     return 2037 - birthYeah;
// // // }

// // // const age2 = calcAge2(1998);
// // // console.log(age1, age2);

// // // function expressions
// // const calcAge2 = function (birthYeah) {
// //     return 2037 - birthYeah;
// // }

// // //Arrow function
// // const calcAge3 = birthYeah => 2037 - birthYeah;
// // const age3 = calcAge3(1991);
// // console.log(`Your age is ${age3}`);

// // const yearsUntilRetirement = (birthYeah, firstName) => {
// //     const age = 2037 - birthYeah;
// //     const retirement = 65 - age;
// //     //return retirement;
// //     return `${firstName} retires in ${retirement} years`
// // }

// // console.log(yearsUntilRetirement(1991, 'Jonas'));
// // console.log(yearsUntilRetirement(1980, 'Bob'));
// // function cutFruitPieces(fruit) {
// //     return fruit * 4;
// // }

// // function fruitProcessor(apples, oranges) {
// //     const applePieces = cutFruitPieces(apples)
// //     const orangePieces = cutFruitPieces(oranges)
// //     const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of oranges.`;
// //     return juice;
// // }

// // console.log(fruitProcessor(2, 3));

// // const calcAge = function (birthYeah) {
// //     return 2037 - birthYeah;
// // }

// // const yearsUntilRetirement = function (birthYeah, firstName) {
// //     const age = calcAge(birthYeah);
// //     const retirement = 65 - age;

// //     if (retirement > 0) {
// //         console.log(`${firstName} retires in ${retirement} years`)
// //         return retirement;
// //     } else {
// //         console.log(`${firstName} already retired!`)
// //         return -1;
// //     }
// //     //return `${firstName} retires in ${retirement} years`
// // }

// // yearsUntilRetirement(1991, 'Jonas');
// // yearsUntilRetirement(1950, 'Mike'); 36 / 379


// // Coding Challenge #1 
// // Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
// // gymnastics discipline, which works differently.
// // Each team competes 3 times, and then the average of the 3 scores is calculated (so
// // one average score per team).
// // A team only wins if it has at least double the average score of the other team.
// // Otherwise, no team wins! 
// // Your tasks:
// // 1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
// // 2. Use the function to calculate the average for both teams
// // 3. Create a function 'checkWinner' that takes the average score of each team
// // as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
// // to the console, together with the victory points, according to the rule above.
// // Example: "Koalas win (30 vs. 13)"
// // 4. Use the 'checkWinner' function to determine the winner for both Data 1 and
// // Data 2
// // 5. Ignore draws this time 
// // Test data:
// // § Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
// // § Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27 

// // let Koalas1 = 65
// // let Koalas2 = 54
// // let Koalas3 = 49

// // let Dolphins1 = 44
// // let Dolphins2 = 23
// // let Dolphins3 = 71

// let Koalas1 = 23
// let Koalas2 = 34
// let Koalas3 = 27

// let Dolphins1 = 85
// let Dolphins2 = 54
// let Dolphins3 = 41



// const Avg = calcAverage = (score1, score2, score3) => {
//     const average = (score1 + score2 + score3) / 3
//     return average;
// }

// function checkWinner(KoalasAvg, DolphinsAvg) {

//     if (KoalasAvg > DolphinsAvg && KoalasAvg >= 2 * DolphinsAvg) {
//         console.log(`Koalas win ${KoalasAvg},  ${DolphinsAvg} `)
//     } else if (KoalasAvg < DolphinsAvg && DolphinsAvg >= 2 * KoalasAvg) {
//         console.log(`Dolphins Win! ${DolphinsAvg}, ${KoalasAvg}`)
//     } else {
//         console.log(`No Winner! ${KoalasAvg}, ${DolphinsAvg} `)
//     }
//     //return team1Avg > team2Avg ? console.log(`Dolphins Win`) : console.log(`Dolphins Win`)
//     //var c = ((a < b) ? 'minor' : 'major');
// }


// checkWinner(calcAverage(Koalas1, Koalas2, Koalas3), calcAverage(Dolphins1, Dolphins2, Dolphins3))





// const calcAverageT = (a, b, c) => (a + b + c) / 3
// console.log(calcAverageT(3, 4, 5))

// //test
// // const scoreDolphins = calcAverageT(44, 23, 71);
// // const scoreKoalas = calcAverageT(65, 54, 49);



// const scoreDolphins = calcAverageT(85, 54, 41);
// const scoreKoalas = calcAverageT(23, 34, 27);

// const checkWinnerT = function (avgDolphins, avgKoalas) {
//     if (avgDolphins >= 2 * avgKoalas) {
//         console.log(`Dolphins win (${avgDolphins}  vs. ${avgKoalas})`)
//     } else if (avgKoalas >= 2 * avgDolphins)
//         console.log(`Dolphins win (${avgDolphins}  vs. ${avgKoalas})`)
//     else {
//         console.log(`No team Wins`)
//     }
// }

// checkWinnerT(scoreDolphins, scoreKoalas)

// const friend1 = 'Michael';
// const friend2 = 'Steven';
// const friend3 = 'Peter';

// const friends = ['Michael', 'Steven', 'Peter'];
// console.log(friends);

// console.log(friends[friends.length - 1]);

// friends[2] = 'Jay';
// console.log(friends);

// const jonas = ['Jonas', 'Scmedtmann', 2037, 1991, friends]
// console.log(jonas);

//exercise

// const calcAge = function (birthYeah) {
//     return 2037 - birthYeah;
// }

// const years = [1990, 1967, 2002, 2010, 2018];
// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[2]);
// console.log(age1, age2, age3);

// const friends = ['Michael', 'Steven', 'Peter'];

// //add
// friends.push('Lucas', 'Bernal', 'Jay');
// friends.unshift('Jonh', 'Luis');
// console.log(friends, friends.length);

// // remove
// friends.pop();//last
// const popped = friends.pop();
// console.log(popped);
// console.log(friends);

// friends.shift(); //first
// console.log(friends);

// friends.push(23);
// console.log(friends.indexOf('Steven'));
// console.log(friends.includes('Steven'));

// console.log(friends.includes(23));

// if (friends.includes('Steven')) {
//     console.log(`You have a friends called Steven`)
// }


// Coding Challenge #2 
// Steven is still building his tip calculator, using the same rules as before: Tip 15% of
// the bill if the bill value is between 50 and 300, and if the value is different, the tip is
// 20%. 
// Your tasks:
// 1. Write a function 'calcTip' that takes any bill value as an input and returns
// the corresponding tip, calculated based on the rules above (you can check out
// the code from first tip calculator challenge if you need to). Use the function
// type you like the most. Test the function using a bill value of 100
// 2. And now let's use arrays! So create an array 'bills' containing the test data
// below
// 3. Create an array 'tips' containing the tip value for each bill, calculated from
// the function you created before
// 4. Bonus: Create an array 'total' containing the total values, so the bill + tip 
// Test data: 125, 555 and 44 
// Hint: Remember that an array needs a value in each position, and that value can
// actually be the returned value of a function! So you can just call a function as array
// values (so don't store the tip values in separate variables first, but right in the new
// array) � 


// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Shmedtmann',
//     age: 2037 - 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven']
// };

// console.log(jonas);

// console.log(jonas.lastName);
// console.log(jonas['lastName']);

// const nameKey = 'Name';
// console.log(jonas['first' + nameKey])
// console.log(jonas['last' + nameKey])

// const interestedIn = prompt('What do you want to know about jonas? Choose between, firstName, lastName, age, job and friends')

// if (jonas[interestedIn]) {
//     console.log(jonas[interestedIn])
// } else {
//     console.log('Wrong request')
// }


// jonas.location = 'Portugal';
// jonas['twiter'] = '@jonasschemtman';
// console.log(jonas);


// //challenge 
// //jonas has 3 friends and his best friends is called Michael

// console.log(`${jonas.firstName + ' ' + jonas.lastName} has ${jonas.friends.length} friends and his best friends is called ${jonas.friends[0]}`);


// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Shmedtmann',
//     birthYeah: 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven'],
//     hasDriverLicense: true,

//     // calcAge: function (birthYeah) {
//     //     return 2037 - birthYeah;
//     // }

//     // calcAge: function () {
//     //     //console.log(this);
//     //     return 2037 - this.birthYeah;
//     // }
//     calcAge: function () {
//         this.age = 2037 - this.birthYeah;
//         return this.age;
//     },

//     getSummary: function () {
//         // this.calcAge();
//         // this.hasDriverLicense = false;
//         return `${this.firstName} is a ${this.calcAge()} years old and he has ${this.hasDriverLicense ? 'a' : 'no'} driver license.`;
//     }
// };



// console.log(jonas.getSummary());


//Jonas is a 46-year old teacher, and he has a driver license
//Jonas is a 46-year old teacher, and he has No driver license

// console.log(jonas.calcAge(jonas.birthYeah));
// console.log(jonas['calcAge'](jonas.birthYeah));

// console.log(jonas.calcAge());

// console.log(jonas.age);
// console.log(jonas.age);
// console.log(jonas.age);

// console.log(jonas['calcAge'](jonas.birthYeah));

// const jonas = [
//     'Jonas',
//     'Shmedtmann',
//     2037 - 1991,
//     'teacher',
//     ['Michael', 'Peter', 'Steven'],
//     true
// ];

// const types = [];

// for (let i = 0; i < jonas.length; i++) {
//     console.log(jonas[i], typeof jonas[i]);
//     //types[i] = typeof jonas[i];
//     types.push(typeof jonas[i]);
// }

// console.log(types);


// const years = [1991, 2007, 1969, 2020];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//     ages.push(2037 - years[i]);
// }
// console.log(ages);



// for (let i = 0; i < jonas.length; i++) {
//     if (typeof jonas[i] != 'string') continue
//     console.log(jonas[i], typeof jonas[i]);
// }