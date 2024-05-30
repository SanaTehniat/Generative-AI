"use strict";
// QUESTION NO.41
/* Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array. */
// ANSWER NO.41
let magician_names = ["Derren Brown", "David Blaine", "Paul Daniels", "Roger Lapin"];
function show_magicians() {
    for (let name of magician_names) {
        console.log(name);
    }
}
;
show_magicians();
