// QUESTION NO 6

// Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces. 

// ANSWER NO 6

let whitespaceName : string = "\n\t Zamiyah khan \t\n"
console.log(whitespaceName)

let without_whitespaces : string = whitespaceName.trim()
console.log(without_whitespaces)