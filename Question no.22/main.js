"use strict";
// QUESTION NO.22
// If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program. 
// ANSWER NO.22
const colors = ["red", "green", "blue"];
// Accessing an index that doesn't exist
console.log(colors[3]); // This will produce an index error because the array has only 3 elements but we're trying to access the 4th index
// Let's correct the error by accessing an existing index
console.log(colors[1]); // This will print "green" which is the element at index 1
