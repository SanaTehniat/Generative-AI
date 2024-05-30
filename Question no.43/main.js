"use strict";
// QUESTION NO.43
/* Start with your work from Exercise 42. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.*/
// ANSWER NO.43
let magician_names = ["Derren Brown", "David Blaine", "Paul Daniels", "Roger Lapin"];
function show_magicians(magicians) {
    for (let magician of magicians) {
        console.log(magician);
    }
}
function make_great(magicians) {
    let newMagicians = [];
    for (let magician of magicians) {
        newMagicians.push("The Great " + magician);
    }
    return newMagicians;
}
let greatMagicians = make_great([...magician_names]);
make_great(magician_names);
console.log("\nOriginal Array\n");
show_magicians(magician_names);
console.log("\nCopy Array\n");
show_magicians(greatMagicians);
