// QUESTION NO.17

// You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests. 
// •	Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner. 
// •	Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner. 
// •	Print a message to each of the two people still on your list, letting them know they’re still invited. 
// •	Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program. 
 
// ANSWER NO.17

let guestArr : string[] = ["Sara", "Aaira", "Huzain", "Shaeel","Iqra"]
console.log("Sorry, the dinner table won't arrive in time, that's why we are inviting only two peoples for dinner")

let remove = guestArr.splice(0,2) // remove 2 peoples
 for(let val of guestArr) {
    console.log(val, "sorry I can't invite you to dinner.")
 }
console.log(remove[0], "you're still invited to dinner.")
console.log(remove[1], "you're still invited to dinner.")

 guestArr.splice(0,5)
 console.log(guestArr)