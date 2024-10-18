// // let js = 'amazing';
// // console.log(40 + 8 + 23 - 10);

// // console.log('Jonas');
// // console.log(23);

// // let firstName = 'Matilda';

// // console.log(firstName);
// // console.log(firstName);
// // console.log(firstName);

// // let PI = 3.14156;

// // let myFirstJob = "Coder";
// // let myCurrentJob = "Teacher";

// // console.log(myFirstJob);


// // let javascriptIsFun = 'true';
// // console.log(javascriptIsFun);

// // console.log(typeof true);
// // console.log(typeof javascriptIsFun);
// // console.log(typeof 23);
// // console.log(typeof 'true');

// let age = 30;

// //console.log(age + 1)
// age = 32;
// //console.log(age)

// let birthYear = 1988;
// birthYear = 1991;

// const now = 2037;
// const ageJonas = now - birthYear;
// const ageSarah = now - 2018;
// console.log(ageJonas, ageSarah);
// console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

// const firstName = 'Jonas';
// const lastName = 'Shmedtmann';

// const job = 'teacher';
// const year = 2037;
// const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
// console.log(jonas);
// const jonasnew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!!`;
// console.log(jonasnew);

// console.log('String with \n\
// multiple \n\
// lines');

// console.log(`String
// Multiple
// Lines!!`);



// console.log(firstName + ' ' + lastName);


// // assignment operators
// // let x = 10 + 5;
// // console.log(x);
// // x += 10;
// // console.log(x);
// // x *= 4;
// // console.log(x);
// // x++;
// // x--;
// // x--;
// // console.log(x);

// console.log(ageJonas > ageSarah);
// console.log(ageSarah >= 18);

// const isFullAge = ageSarah >= 18;
// console.log(now - 1991 > now - 2018);

// let x, y;
// x = y = 25 - 10 - 5;
// console.log(x, y);



// const age = 15;
// const isOldEnough = age >= 18;

// if (isOldEnough) {
//     console.log('Sarah can start driving licence ');
// } else {
//     const yearsLeft = 18 - age;
//     console.log(`Sarah is too young, Wait another ${yearsLeft} years :)`);
// }
// const birthYear = 2012;
// let century
// if (birthYear <= 2000) {
//     century = 20;
// } else {
//     century = 21;
// }
// console.log(century);

// const inputYear = '1991';
// console.log(Number(inputYear), inputYear);
// console.log(inputYear + 18);

// console.log(Number('jonas'));
// console.log(typeof NaN);

// console.log(String(23), 23);

// // Tyoe coercion
// console.log('')

// const favourite = Number(prompt("What's your favourite Number"));
// console.log(favourite);
// console.log(typeof favourite);

// if (favourite == 23) { console.log("Cool! 23 is an amazing number") } else if (favourite === 7) {
//     console.log("Cool! 7 is an amazing number")
// }
// else if (favourite === 9) {
//     console.log("Cool! 9 is an amazing number")
// } else {
//     console.log("Number is not 23, 7 or 9")
// }

// if (favourite !== 23)
//     console.log('Why not 23?')
// const hasDriverLicense = true;
// const hasGoodVision = true;

// console.log(hasDriverLicense && hasGoodVision);
// console.log(hasDriverLicense || hasGoodVision);
// console.log(!hasGoodVision);

// const shoouldDrive = hasGoodVision && hasDriverLicense


// // if (hasGoodVision && hasDriverLicense) {
// //     console.log("Sarah is able to drive")
// // } else {
// //     console.log("Someone else should drive")
// // }

// const isTired = false;
// console.log(hasGoodVision && hasDriverLicense && !isTired)

// if (hasDriverLicense && hasGoodVision && !isTired) {
//     console.log("Sarah is able to drive")
// } else {
//     console.log("Someone else should drive")
// }



// function getRandomInt(min, max) {
//     return Math.floor(Math.random() * (max - min)) + min;
// }





// let day = getRandomInt(1, 8)

// console.log(day, typeof day)




// switch (day) {
//     case 1: //day = Monday
//         console.log('Plan course structure');
//         console.log('Go to coding meetup');
//         break;
//     case 2:
//         console.log('Prepare theory videos');
//         break;
//     case 3:
//     case 4:
//         console.log('Write code examples');
//         break;
//     case 5:
//         console.log('Record videos');
//         break;

//     case 6:
//     case 7:
//         console.log('Enjoy the weekend');
//         break;
//     default:
//         console.log('Not a valid day!');

// }

// const age = 85;
// age >= 18 ? console.log('I like to drink wine') : console.log('I like to drink water');

// const drink = age >= 18 ? console.log('I like to drink wine') : console.log('I like to drink water');

// console.log(`i like to drink ${age >= 18 ? 'Wine' : 'water'} `)



//-----------------------------------------------------------------------------------------
// Coding Challenge #4 
// Steven wants to build a very simple tip calculator for whenever he goes eating in a
// restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
// 300. If the value is different, the tip is 20%. 
// Your tasks:
// 1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for
// this. It's not allowed to use an if/else statement  
// 2. Print a string to the console containing the bill value, the tip, and the final value
// (bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value
// 316.25” 
// Test data:
// § Data 1: Test for bill values 275, 40 and 430 
// Hints:
// § To calculate 20% of a value, simply multiply it by 20/100 = 0.2
// § Value X is between 50 and 300, if it's >= 50 && <= 300 

//---------------------------------------------------------------------------------------------

let value = 275;
console.log('Bill = 275')

let tip;

// console.log(`i like to drink ${age >= 18 ? 'Wine' : 'water'} `)
console.log(`The value is: ${value} so the tip value is: ${value >= 50 && value <= 300 ? tip = (value * 0.15) : tip = (value * 0.20)} 
Total is: ${tip + value}`);

value = 40;
console.log('Bill = 40')


// console.log(`i like to drink ${age >= 18 ? 'Wine' : 'water'} `)
console.log(`The value is: ${value} so the tip value is: ${value >= 50 && value <= 300 ? tip = (value * 0.15) : tip = (value * 0.20)} 
Total is: ${tip + value}`);

value = 430;
console.log('Bill = 430')


// console.log(`i like to drink ${age >= 18 ? 'Wine' : 'water'} `)
console.log(`The value is: ${value} so the tip value is: ${value >= 50 && value <= 300 ? tip = (value * 0.15) : tip = (value * 0.20)} 
Total is: ${tip + value}`);



