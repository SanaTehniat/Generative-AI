// QUESTION NO.16

// You just found a bigger dinner table, so now more space is available. Think of three more guests 
//to invite to dinner. 
//•	Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger  dinner table. 
//•	Add one new guest to the beginning of your array. 
//•	Add one new guest to the middle of your array. 
//•	Use append() to add one new guest to the end of your list. 
//•	Print a new set of invitation messages, one for each person in your list. 
 
// ANSWER NO.16

let guestArr : string[] = ["Sara", "Aaira", "Huzain", "Shaeel", "Shahnawaz"];
guestArr.unshift("Arifa") // Add one new guest to the beginning of your array. 
guestArr.splice (3,0, "Shahzy") // Add one new guest to the middle of your array. 
guestArr.push("Daniyal") //  to add one new guest to the end of your list. 
for (let key in guestArr)
console.log("Dear", guestArr[key],  ", \n I arrange a biggest table that's why I am going to invite more three people on my dinner table \n");
