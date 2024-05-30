"use strict";
// QUESTION NO.29
/* Make an array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
•	Make an array of your three favorite fruits and call it favorite_fruits.
•	Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas! */
// ANSWER NO.29
let favorite_fruits = ["Apples", "Bananas", "Strawberries"];
if (favorite_fruits.includes("Apples")) {
    console.log("You really like apples");
}
if (favorite_fruits.includes("Bananas")) {
    console.log("You really like Bananas");
}
if (favorite_fruits.includes("Strawberries")) {
    console.log("You really like Strawberries");
}
if (favorite_fruits.includes("Mangoes")) {
    console.log("You really like Mangoes");
}
if (favorite_fruits.includes("Grapes")) {
    console.log("You really like Grapes");
}
