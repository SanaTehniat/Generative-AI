"use strict";
// QUESTION NO.18
//           Think of at least five places in the world you’d like to visit. 
// ANSWER NO.18
// Array of places to visit
let placesToVisit = ["Switzerland", "Malaysia", "Turkey", "Paris", "New York"];
// Print array in its original order
console.log("Original order:", placesToVisit);
// Print array in alphabetical order without modifying the original list
console.log("Alphabetical order:", placesToVisit.slice().sort());
// Show that your array is still in its original order by printing it.
console.log("Original order again:", placesToVisit);
// Print your array in reverse alphabetical order without changing the order of the original list.
console.log("Reverse alphabetical order:", placesToVisit.slice().sort().reverse());
// Show that your array is still in its original order by printing it again.
console.log("Original order once again:", placesToVisit);
// Reverse the order of your list. Print the array to show that its order has changed.
console.log("Reversed original order:", placesToVisit.reverse());
// Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log("Back to original order:", placesToVisit.reverse());
// Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log("Sorted in alphabetical order:", placesToVisit.sort());
// Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log("Sorted in reverse alphabetical order:", placesToVisit.sort().reverse());
