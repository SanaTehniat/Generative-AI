// QUESTION NO.19
// Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner. 
//ANSWER NO.19
// FROM QUESTION NO.17
var guestArr = ["Sara", "Aaira", "Huzain", "Shaeel", "Iqra"];
console.log("Sorry, the dinner table won't arrive in time, that's why we are inviting only two peoples for dinner");
var remove = guestArr.splice(0, 2); // remove 2 peoples
for (var _i = 0, guestArr_1 = guestArr; _i < guestArr_1.length; _i++) {
    var val = guestArr_1[_i];
    console.log(val, "sorry I can't invite you to dinner.");
}
console.log(remove[0], "you're still invited to dinner.");
console.log(remove[1], "you're still invited to dinner.");
guestArr.splice(0, 5);
console.log(guestArr);
var dinner_guest = ["Sara", "Aaira"];
var dinnerLength = dinner_guest.length;
console.log("I am inviting total ".concat(dinnerLength, " people to dinner."));
