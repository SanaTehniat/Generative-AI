// QUESTION NO.21

// They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items. 

// ANSWER NO.21

// Define interfaces for different types of items
interface person {
    name: string;
    fathername: string;
    age: number;
    nationality: string;
}

interface Book {
    title: string;
    author: string;
    genre: string;
}

interface Food {
    name: string;
    price: number;
    flavour: string;
}

// Create objects containing different items
const personName : person = {
    name:"Sana Tehniat Aziz",
    fathername:"Aziz-ur-Rehman",
    age: 26,
    nationality: "Pakistani"

};

const bookItem: Book = {
    title: "The Great Gatsby",
    author: "F.Scott Fitzgerald",
    genre: "Classic novel"
};

const foodItem: Food = {
    name: "pizza",
    flavour: "Margherita",
    price: 700,
    
};

// Print out the objects

 console.log(`Person Name: ${personName.name} \nFather Name: ${personName.fathername} \nage: ${personName.age} \nNationality: ${personName.nationality}\n`);

  console.log(`Book title: ${bookItem.title} \nAuthor: ${bookItem.author} \nGenre: ${bookItem.genre}\n`);

  console.log(`Food: ${foodItem.name} \nFlavour: ${foodItem.flavour} \nPrice: ${foodItem.price}\n`);
  
 

