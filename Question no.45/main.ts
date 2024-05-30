// QUESTION NO.45

/* Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly. */

// ANSWER NO.45

function myCar(manufacturer: string, model: string, color?: string, optionalFeature?: string): {
    manufacturer:string,
    model:string,
    color?:string,
    optionalFeature?:string
}{
    return{
        manufacturer,
        model,
        color,
        optionalFeature
    }
}

let car = myCar('Bugatti','Chiron','Black','Buffers');
console.log(car);