// QUESTION NO.38

/* Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.*/

// ANSWER NO.38

function describe_city(City: string, Country: string = "Pakistan"){
console.log(`${City} is in ${Country}`)
}

describe_city("Karachi")

describe_city("Islamabad")

describe_city("Paris", "France")