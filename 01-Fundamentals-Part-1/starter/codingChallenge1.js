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

