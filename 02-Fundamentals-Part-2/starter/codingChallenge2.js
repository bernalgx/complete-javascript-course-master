'use strict';


// // // JavaScript Fundamentals – Part 1


// // // Coding Challenge #1 
// // // Mark and John are trying to compare their BMI (Body Mass Index), which is
// // // calculated using the formula:
// // // BMI = mass / height ** 2 = mass / (height * height) (mass in kg
// // // and height in meter). 
// // // Your tasks:
// // // 1. Store Mark's and John's mass and height in variables
// // // 2. Calculate both their BMIs using the formula (you can even implement both
// // // versions)
// // // 3. Create a Boolean variable 'markHigherBMI' containing information about
// // // whether Mark has a higher BMI than John. 
// // // Test data:
// // // § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
// // // m tall.
// // // § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
// // // m tall.

// // // GOOD LUCK  


// // let heightMark;
// // let weightMark;

// // let heightJohn;
// // let weightJohn;

// // let markHigherBMI = false;

// // let bmiMark;
// // let bmiJonh;


// // //Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
// // // m tall.


// // console.log('Datos 1')
// // heightMark = 1.69;
// // weightMark = 78;
// // bmiMark = weightMark / heightMark ** 2
// // console.log("Mark's BMI = " + bmiMark);

// // heightJohn = 1.95;
// // weightJohn = 92;
// // bmiJonh = weightJohn / heightJohn ** 2
// // console.log("Jonh's BMI = " + bmiJonh);

// // markHigherBMI = (bmiMark > bmiJonh);
// // console.log(markHigherBMI);

// // if (markHigherBMI) {
// //     console.log(`Mark's BMI: ${bmiMark} is higher than John's: ${bmiJonh}`);
// // } else {
// //     console.log(`John's BMI: ${bmiJonh} is higher than Mark's: ${bmiMark}`);
// // }

// // // § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
// // // m tall.

// // console.log('Datos 2')
// // heightMark = 1.88;
// // weightMark = 95;
// // bmiMark = weightMark / heightMark ** 2
// // console.log("Mark's BMI = " + bmiMark);

// // heightJohn = 1.76;
// // weightJohn = 85;
// // bmiJonh = weightJohn / heightJohn ** 2
// // console.log("Jonh's BMI = " + bmiJonh);

// // markHigherBMI = (bmiMark > bmiJonh);
// // console.log(markHigherBMI);

// // // Coding Challenge #2 
// // // Use the BMI example from Challenge #1, and the code you already wrote, and
// // // improve it. 
// // // Your tasks:
// // // 1. Print a nice output to the console, saying who has the higher BMI. The message
// // // is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// // // 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
// // // BMI (28.3) is higher than John's (23.9)!" 
// // // Hint: Use an if/else statement 


// // // GOOD LUCK 

// // //1. Print a nice output to the console, saying who has the higher BMI. The message
// // // is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"

// // if (bmiMark > bmiJonh) {
// //     console.log(`Mark's BMI: ${bmiMark} is higher than John's: ${bmiJonh}`);
// // } else {
// //     console.log(`John's BMI: ${bmiJonh} is higher than Mark's: ${bmiMark}`);
// // }

// //  // 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
// // // BMI (28.3) is higher than John's (23.9)!" 


// // Coding Challenge #3 
// // There are two gymnastics teams, Dolphins and Koalas. They compete against each
// // other 3 times. The winner with the highest average score wins a trophy! 
// // Your tasks:
// // 1. Calculate the average score for each team, using the test data below
// // 2. Compare the team's average scores to determine the winner of the competition,
// // and print it to the console. Don't forget that there can be a draw, so test for that
// // as well (draw means they have the same average score)
// // 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
// // team only wins if it has a higher score than the other team, and the same time a
// // score of at least 100 points. Hint: Use a logical operator to test for minimum
// // score, as well as multiple else-if blocks �
// // 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
// // both teams have the same score and both have a score greater or equal 100
// // points. Otherwise, no team wins the trophy 
// // Test data:
// // § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// // § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// // § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106


// // Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// let DolphinsScore1 = 96;
// let DolphinsScore2 = 108;
// let DolphinsScore3 = 89;
// let DolphinsAvg;

// let KoalasScore1 = 88;
// let KoalasScore2 = 91;
// let KoalasScore3 = 110;

// const minimumScore = 100;

// DolphinsAvg = (DolphinsScore1 + DolphinsScore2 + DolphinsScore3) / 3
// KoalasAvg = (KoalasScore1 + KoalasScore2 + KoalasScore3) / 3


// console.log(`Data 1`);
// console.log(`Dolphins Average is ${DolphinsAvg}`);
// console.log(`Koalas Average is ${KoalasAvg}`);


// if (KoalasAvg > DolphinsAvg) {
//     console.log(`Koalas Win!`);
// } else if (DolphinsAvg > KoalasAvg) {
//     console.log(`Dolphins Win!`);
// } else {

//     console.log(`It's a Draw!`);
// }

// console.log(`BONUS`);

// if ((KoalasAvg > DolphinsAvg) && (KoalasAvg >= minimumScore)) {
//     console.log(`Koalas Win!`);
// } else if ((DolphinsAvg > KoalasAvg) && (DolphinsAvg >= minimumScore)) {
//     console.log(`Dolphins Win!`);
// } else if ((DolphinsAvg == KoalasAvg) && (DolphinsAvg >= minimumScore) && (KoalasAvg >= minimumScore)) {

//     console.log(`It's a Draw!`);
// }

// console.log(`Data Bonus 1`);

// // § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123

// DolphinsScore1 = 97;
// DolphinsScore2 = 112;
// DolphinsScore3 = 89;
// DolphinsAvg;

// KoalasScore1 = 109;
// KoalasScore2 = 95;
// KoalasScore3 = 123;

// DolphinsAvg = (DolphinsScore1 + DolphinsScore2 + DolphinsScore3) / 3
// KoalasAvg = (KoalasScore1 + KoalasScore2 + KoalasScore3) / 3

// console.log(`Dolphins Average is ${DolphinsAvg}`);
// console.log(`Koalas Average is ${KoalasAvg}`);

// if (KoalasAvg > DolphinsAvg) {
//     console.log(`Koalas Win!`);
// } else if (DolphinsAvg > KoalasAvg) {
//     console.log(`Dolphins Win!`);
// } else {
//     console.log(`It's a Draw!`);
// }

// console.log(`BONUS`);


// if ((KoalasAvg > DolphinsAvg) && (KoalasAvg >= minimumScore)) {
//     console.log(`Koalas Win!`);
// } else if ((DolphinsAvg > KoalasAvg) && (DolphinsAvg >= minimumScore)) {
//     console.log(`Dolphins Win!`);
// } else if ((DolphinsAvg == KoalasAvg) && (DolphinsAvg >= minimumScore) && (KoalasAvg >= minimumScore)) {

//     console.log(`It's a Draw!`);
// }
// else {
//     console.log(`No winners!`);
// }



// // § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
// console.log(`Data Bonus 2`);

// DolphinsScore1 = 97;
// DolphinsScore2 = 112;
// DolphinsScore3 = 101;
// DolphinsAvg;

// KoalasScore1 = 109;
// KoalasScore2 = 95;
// KoalasScore3 = 106;

// DolphinsAvg = (DolphinsScore1 + DolphinsScore2 + DolphinsScore3) / 3
// KoalasAvg = (KoalasScore1 + KoalasScore2 + KoalasScore3) / 3

// console.log(`Dolphins Average is ${DolphinsAvg}`);
// console.log(`Koalas Average is ${KoalasAvg}`);

// if (KoalasAvg > DolphinsAvg) {
//     console.log(`Koalas Win!`);
// } else if (DolphinsAvg > KoalasAvg) {
//     console.log(`Dolphins Win!`);
// } else {

//     console.log(`It's a Draw!`);
// }

// console.log(`BONUS`);
// console.log(`Dolphins Average is ${DolphinsAvg}`);
// console.log(`Koalas Average is ${KoalasAvg}`);

// if ((KoalasAvg > DolphinsAvg) && (KoalasAvg >= minimumScore)) {
//     console.log(`Koalas Win!`);
// } else if ((DolphinsAvg > KoalasAvg) && (DolphinsAvg >= minimumScore)) {
//     console.log(`Dolphins Win!`);
// } else if ((DolphinsAvg == KoalasAvg) && (DolphinsAvg >= minimumScore) && (KoalasAvg >= minimumScore)) {

//     console.log(`It's a Draw!`);
// } else {
//     console.log(`No winners!`);
// }


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

// let value = 275;
// console.log('Bill = 275')

// let tip;

// // console.log(`i like to drink ${age >= 18 ? 'Wine' : 'water'} `)
// console.log(`The value is: ${value} so the tip value is: ${value >= 50 && value <= 300 ? tip = (value * 0.15) : tip = (value * 0.20)} 
// Total is: ${tip + value}`);

// value = 40;
// console.log('Bill = 40')


// // console.log(`i like to drink ${age >= 18 ? 'Wine' : 'water'} `)
// console.log(`The value is: ${value} so the tip value is: ${value >= 50 && value <= 300 ? tip = (value * 0.15) : tip = (value * 0.20)} 
// Total is: ${tip + value}`);

// value = 430;
// console.log('Bill = 430')


// // console.log(`i like to drink ${age >= 18 ? 'Wine' : 'water'} `)
// console.log(`The value is: ${value} so the tip value is: ${value >= 50 && value <= 300 ? tip = (value * 0.15) : tip = (value * 0.20)} 
// Total is: ${tip + value}`);


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


// let tip;
// let bills = [125, 555, 44]


// function calcTip(billValue) {
//     billValue >= 50 && billValue <= 300 ? tip = (billValue * 0.15) : tip = (billValue * 0.20)
//     return tip;
// }


// let tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]
// let total = [bills[0] + calcTip(bills[0]), bills[1] + calcTip(bills[1]), bills[2] + calcTip(bills[2])]

// console.log(`Bills= ${bills}
// Tips= ${tips}
// Total= ${total}`);

// calcTip(bills[0]);
// console.log(tip);
// calcTip(bills[1]);
// console.log(tip);
// calcTip(bills[2]);
// console.log(tip);

// calcTip(100);
// console.log(tip);


// let value = 275;
// console.log('Bill = 275')

// //let tip;

// // console.log(`i like to drink ${age >= 18 ? 'Wine' : 'water'} `)
// console.log(`The value is: ${value} so the tip value is: ${value >= 50 && value <= 300 ? tip = (value * 0.15) : tip = (value * 0.20)} 
// Total is: ${tip + value}`);

// value = 40;
// console.log('Bill = 40')


// // console.log(`i like to drink ${age >= 18 ? 'Wine' : 'water'} `)
// console.log(`The value is: ${value} so the tip value is: ${value >= 50 && value <= 300 ? tip = (value * 0.15) : tip = (value * 0.20)} 
// Total is: ${tip + value}`);

// value = 430;
// console.log('Bill = 430')