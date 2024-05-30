"use strict";
// QUESTION NO.39
/* Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this: "Lahore, Pakistan" Call your function with at least three city-country pairs, and print the value that’s returned. */
// ANSWER NO.39
function city_country(City, Country) {
    return `${City}, ${Country}`;
}
console.log(city_country("Karachi", "Pakistan"));
console.log(city_country("Berlin", "Germany"));
console.log(city_country("Toronto", "Canada"));
