// QUESTION NO.19

// Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner. 

//ANSWER NO.19


// FROM QUESTION NO.17

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


let dinner_guest : string[] = ["Sara" , "Aaira"]
let dinnerLength : number = dinner_guest.length
console.log(`I am inviting total ${dinnerLength} people to dinner.`)


