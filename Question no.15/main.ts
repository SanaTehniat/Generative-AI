// QUESTION NO.15

// You just heard that one of your guests can’t make the dinner, so you need to send out a new 
// set of invitations. You’ll have to think of someone else to invite. • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it. 
//•	Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting. 
//•	Print a second set of invitation messages, one for each person who is still in your list. 

// ANSWER NO.15

let guest_list : string[] = ["Sara", "Aaira", "Huzain", "Shaeel", "Shahnawaz"];
guest_list.splice (2,1, "Iqra");
for (let key in guest_list)
console.log("Dear", guest_list[key],  ", you are invited to the dinner")
console.log("Dear Huzain, is not coming to take a dinner tonight")

