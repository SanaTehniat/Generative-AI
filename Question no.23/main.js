"use strict";
// QUESTION NO.23
/* Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
let car = 'subaru';
console.log("Is car == 'subaru'? I predict True.") console.log(car == 'subaru')
•	Look closely at your results, and make sure you understand why each line evaluates to True or False.
•	Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False. */
// ANSWER NO.23
// TEST 1
let car = 'subaru';
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru');
// TEST 2
console.log("Is car === 'subaru'? I predict True.");
console.log(car === 'subaru');
// TEST 3
console.log("Is car !== 'Toyota'? I predict True.");
console.log(car !== 'Toyota');
// TEST 4
console.log("Is car.length > 0 ? I predict True.");
console.log(car.length > 0);
// TEST 5
console.log("Is car.toUpperCase() === 'SUBARU' I predict True.");
console.log(car.toUpperCase() === 'SUBARU');
// TEST 6
console.log("Is car != 'subaru'? I predict False.");
console.log(car != 'subaru');
// TEST 7
console.log("Is car == 'Honda'? I predict False.");
console.log(car == 'Honda');
// TEST 8
console.log("Is car.length < 4? I predict False.");
console.log(car.length < 4);
// TEST 9
console.log("Is car === BMW? I predict False.");
console.log(car === 'BMW');
// TEST 10
console.log("Is car.toLowerrCase() === 'SUBARU' I predict False.");
console.log(car.toLowerCase() === 'SUBARU');
