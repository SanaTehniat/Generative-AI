"use strict";
// QUESTION NO.24
//  You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following: 
// ANSWER NO.24
// • Tests for equality and inequality with strings 
// equality
let Name = "Sana";
console.log("Is Name is equal to Sana?");
console.log(Name == "Sana"); // true
// inequality
console.log("\nIs Name is not equal to Sana?");
console.log(Name != "Sana"); // false
// •Tests using the lower case function 
console.log("\nIs Name is not equal to LowerCase() == name?");
console.log(Name.toLowerCase() != "Sana"); // true
console.log("\nIs Name is equal to LowerCase() == Name? ");
console.log(Name.toLowerCase() == "Sana"); // false
//                     **** Numerical tests ****
//  involving equality 
let a = 20;
let b = 25;
console.log("\nIs a !== b?");
console.log(a !== b); // true
// inequality
console.log("\nIs a === b?");
console.log(a === b); // false
//  greater than
console.log("\nIs b > a?");
console.log(b > a); // true
//  less than
console.log("\nIs b < a?");
console.log(b < a); // false
//  greater than or equal to
console.log("\nIs b >= a?");
console.log(b >= a); // true
//  less than or equal to 
console.log("\nIs b <= a?");
console.log(b <= a); // false
//                  **** Logical operators ****
// •Tests using "AND" operators 
console.log("\nIs a>o && b>0?");
console.log(a > 0 && b > 0); // true
console.log("\nIs b!=5 && a==25?");
console.log(b != 5 && a == 25); // false
// •Tests using "OR" operators 
console.log("\nIs a===20 || b===25");
console.log(a === 20 || b === 25); // true
console.log("\nIs b<-5 || a>=5");
console.log(b < -5 || a >= 30); // false
//                   **** Array test ****
// •Test whether an item is in an array 
let fruits = ["Apple", "Orange", "Strawberry"];
console.log("\nIs Strawberry include in fruits array?");
console.log(fruits.includes("Strawberry")); // true
// •Test whether an item is not in an array 
console.log("\nIs Apple is not include in my fruits array?");
console.log(!fruits.includes("Apple")); // false
