"use strict";
// QUESTION NO.42
/* Start with a copy of your program from Exercise 41. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.*/
// ANSWER NO.42
let magician_names = ["Derren Brown", "David Blaine", "Paul Daniels", "Roger Lapin"];
function show_magicians() {
    for (let name of magician_names) {
        console.log(name);
    }
}
;
function make_great() {
    for (let i = 0; i < magician_names.length; i++) {
        magician_names[i] = "The Great " + magician_names[i];
    }
}
make_great();
show_magicians();
