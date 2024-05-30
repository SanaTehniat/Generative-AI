// QUESTION NO.37

/* Modify the make_shirt() function so that shirts are large by default, with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message. */

// ANSWER NO.37

function make_shirt(size: string = "large" , message: string = "I Love TypeScript"){
    console.log(`You have order a ${size} size shirt that says : ${message}`);
}

make_shirt()

make_shirt("medium")

make_shirt("small", "I need a big shirt to wear")