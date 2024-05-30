// QUESTION NO.32

/*  Do the following to create a program that simulates how websites ensure that everyone has a unique username. 
•	Make a list of five or more usernames called current_users. 
•	Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list. 
•	Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available. 
•	Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted. */

// ANSWER NO.32

let current_users = ["Ayesha", "Maham", "Shaeel", "Iqra", "Aliyana"]

let new_users = ["Zamiyah", "Aaira", "Iqra", "Shaeel", "Hamza"] 

for(let user of new_users){

    let condition = (current_users.some(new_users_one => new_users_one.toLocaleLowerCase() === user.toLocaleLowerCase()))
    if(condition){
        console.log(`This Username ${user} is not availabe. Please write a different Username`);
        
    }else{
        console.log(`This Username ${user} is available`);
        
    }
    }