"use strict";
// QUESTION NO.27
/* Turn your if-else chain from Exercise 5-4 into an if-else chain.
•	If the alien is green, print a message that the player earned 5 points.
•	If the alien is yellow, print a message that the player earned 10 points.
•	If the alien is red, print a message that the player earned 15 points.
•	Write three versions of this program, making sure each message is printed for the appropriate color alien.*/
// ANSWER NO.27
// Variable declare
let alienColor = "green";
// Version 1:
//  Using If and Else-If statements
if (alienColor === "green") {
    console.log("(Version 1) The player earned 5 points");
}
else if (alienColor === "yellow") {
    console.log("The player earned 10 points");
}
else if (alienColor === "red") {
    console.log("The player earned 15 points");
}
// Version 2:
let alienColor1 = "yellow";
if (alienColor1 === "green") {
    console.log("The player earned 5 points");
}
else if (alienColor1 === "yellow") {
    console.log("(Version 2) The player earned 10 points");
}
else if (alienColor1 === "red") {
    console.log("The player earned 15 points");
}
// / Version 3:
let alienColor2 = "red";
if (alienColor2 === "green") {
    console.log("The player earned 5 points");
}
else if (alienColor2 === "yellow") {
    console.log("The player earned 10 points");
}
else if (alienColor2 === "red") {
    console.log("(Version 3) The player earned 15 points");
}
