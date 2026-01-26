1; // Array is a data type that can store multiple elements.

let fruits = ["Apple", "Orange", "Banana", "Kiwi"];
console.log(fruits);

// 2. Accessing Array elements - arrays start from 0
console.log(fruits[0]);

// 3. Updating array elements
fruits[1] = "Mango";
console.log(fruits);

fruits[3] = "Strawbary";
console.log(fruits);

// 4.  . length - returns how many elements inside an array

console.log(fruits.length);

// ------ Methods that return new array ----//

// 5.    concat () - merges arrays into one array

const fruitsTwo = ["Apple", "Banana", "Orange"];
const moreFruits = ["Cherry", "Grape"];
const allFruits = fruitsTwo.concat(moreFruits);

console.log(allFruits);
console.log(fruitsTwo);
console.log(moreFruits);

// 6.    .flat () - flattens the arrays

const nestedNumbers = [[1, 2], [3, 4], [5]];
const flatNumbers = nestedNumbers.flat();

// console.log(nestedNumbers);
console.log(flatNumbers);

//console.log(nestedNumbers[0][1]);

// 7.    .slice() - extracts a porthion of an array

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(numbers);

// slice (1 is index here - included, 4 is also index here - excluded)

const slicedNumbersArray = numbers.slice(1, 4);
console.log(slicedNumbersArray);

const myFavorite = ["green", "yellow", "blue", "red", "white"];
const mySlicedFavoriteColors = myFavorite.slice(1, 4);

console.log(mySlicedFavoriteColors);

// ------ Methods that change the ORIGINAL array ----//

// 1.   .copiying an array

const originalFruits = ["Kivi", "Banana", "Cherry"];
const richardFruits = [...originalFruits];

console.log(originalFruits);
console.log(richardFruits);

// 2.   .push()  -  adds a new elemet at the end of an array

console.log(originalFruits);
richardFruits.push("Coconut");
console.log(richardFruits);

// 3.   .pop() -  removes last element from the array

console.log(originalFruits);
richardFruits.pop();
console.log(richardFruits);

// 4.   .unshift   -  Add an element at the biginning of an array

console.log(originalFruits);
richardFruits.unshift("Grapes");
console.log(richardFruits);

// 5.   .shift()   -  removes the first element from an array

console.log(originalFruits);
richardFruits.shift();
console.log(richardFruits);

// 6.   .reverse() -  reverses an array
console.log(originalFruits);
console.log(richardFruits.reverse());

// 7.    . sort() - sorts the array -> commonly used with numbers
const newNumbers = [3, 6, 8, 2, 1, 77, 32, 62];
newNumbers.sort((a, b) => a - b);
console.log(newNumbers);

const stringArrays = ["a", "c", "z", "b"];
stringArrays.sort();
console.log(stringArrays);

// -------- Methods that find an element in the array  -----//

//1. .indexoOf() - Returns the first index of a specific element inside an array. Always returns the first match.

const akbarAliFavoriteColors = [
  "Black",
  "White",
  "Red",
  "Blue",
  "Red",
  "Violet",
  "Red",
];
console.log(akbarAliFavoriteColors.indexOf("Red"));

// 2.  .lastIndexOf() - returns the last index of  of a specific inside an array. Always returns the  last match.

console.log(akbarAliFavoriteColors.lastIndexOf("Red"));

// 3.     .at() - Get an element at a specific position

console.log(akbarAliFavoriteColors.at(1));

//4.       .includes() - Checks if an elements exists inside an array. It will always return a boolean.

const nycTrainLanes = ["F", "E", "B", "D", "Z", "J"];
console.log(nycTrainLanes.includes("B"));
console.log(nycTrainLanes.includes("0"));

// -------- Joiners & Converters  ----- //
// 1.        .Join()  -  converts an array into string

const niluFruitsArray = ["Apple", "Banana", "Kiwi"];
const niluFruitsString = niluFruitsArray.join(", ");
console.log(niluFruitsString);

// 2,    .Array.from()  - creates a new array from string

const str = "Hello";
const chars = Array.from(str);
console.log(chars);

// Array.isArray() - checks if a value is an array. Always returns a boolean
const nycNumbers = [1, 2, 3, 4, 5];
console.log(Array.isArray(nycNumbers));

const newNumber = [1];
console.log(Array.isArray(newNumber));
