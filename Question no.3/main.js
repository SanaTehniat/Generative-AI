"use strict";
// QUESTION NO.3
// Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase
// ANSWER NO.3
let personName = "Sana tehniat";
console.log("Lowercase =", personName.toLowerCase());
console.log("Uppercase =", personName.toUpperCase());
console.log("Titlecase =", personName.replace(/\b\w/g, c => c.toUpperCase())); // b- boundry, w- words, c- characters