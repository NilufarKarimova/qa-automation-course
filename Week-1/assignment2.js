// 1. Identify the Data Type
// Write the Data Type of each value:

// "Hello World" -> String (text value)
// 42 -> Number (numeric value)
// true -> Boolean (true or false)
// null -> Null (intentional empty value)
// undefined -> Undefined (no value assigned)
// [1, 2, 3] -. Array (non-primitive data type)
// { name: "Alex", age: 20 } -> Object (non-primitive data type)

// 2 Create Variables
//Create variables for each of the following and assign appropriate values:

// String: For my Favorite Movie
let myFavoriteMovie = "Ask Yeniden";
console.log("myFavoriteMovie:", "Ask Yeniden");

// A number for my age
let myAge = 39;
console.log("Age:", myAge);

//A Boolean for weather I like
let LikeRainyWeather = true;
console.log("Do I like reany weather?", LikeRainyWeather);
LikeRainyWeather = false;
console.log("Do I like reany wether now?", LikeRainyWeather);

// A variable with Undefined value
// My future plan become a QA Automation Engineer
let myFuturePlan;
console.log("My future plan is:", myFuturePlan);
myFuturePlan = "Become a QA Automation Engineer";
console.log("My future plan now is:", myFuturePlan);

//A variable with Null value

// Null value -> the chair is empty for now
let favoriteChair = null;
console.log("Favorite chair currently:", favoriteChair);
// Later, someone chooses the chair
favoriteChair = "Yellow Armchair";
console.log("Favorite chair now:", favoriteChair);

// 3. Primitive vs Non-Primitive
//Answer the following questions:
//a) Which of the following are primitive and which are **non-primitive**?
//b) Explain in 1–2 sentences why arrays and objects are called non-primitive.

//Answers

//"Arrays and objects are non-primitive because they can store many values and organize data."
//let a = "JS";        // Primitive -> string
//let b = [10, 20];    // Non-primitive -> array
//let c = 100;         // Primitive -> number
//let d = { city: "Paris" }; // Non-primitive -> object

//4. Modify the Value
//Look at the code below and answer the questions:
//let x ="Hello";
//let y = x;
//y ="Hi";
//a) What is the value of `x`?
//b) Is this an example of primitive or non-primitive behavior? Why?

//Answers:
// a) x is still "Hello"
// b) This is primitive behavior because when we assign x to y, a copy of the value is made. Changing y does not affect x.

// 5. Array
//Create 3 different arrays that contains 5 elements each.
//Tasks:
//Use different data types for each array.
//Log (console.log) the entire array

//Answers

// Array 1: Numbers
let numbers = [1, 2, 3, 4, 5];
console.log(numbers);

// Array 2: Words
let colors = ["Red", "Blue", "Green", "Yellow", "Pink"];
console.log(colors);

// Array 3: Mixed types
let things = [10, "Hello", true, null, "Bye"];
console.log(things);

// 6. Object

// Answers:
// 1. Object for a phone
let phone = {
  brand: "Apple",
  model: "iPhone 16",
  price: 1200,
  colors: ["Black", "Gray", "Golden"], // array property
  is5G: true,
};

console.log(phone);
console.log(phone.brand);
console.log(phone.model);

// 2. Object for a car
let car = {
  make: "Mazda",
  model: "CV9",
  year: 2010,
  features: ["AC", "GPS", "Cruise Control"], // array property
  isElectric: false,
};
console.log(car);
console.log(car.make);
console.log(car.model);

// 3. Object for a book
let book = {
  title: "The Story of My Experiments with Truth",
  author: "Mahatma Gandhi",
  pages: 208,
  genres: ["Autobiography", "Philosophy"], // array property
  isBestseller: true,
};

console.log(book);
console.log(book.title);
console.log(book.author);

//7.Control Flow

//If Statement

//Write a program that:
//Checks if a number is positive
//Prints "Positive number" if true

// Answer

// You can change this number to test
let number = 10;

if (number > 0) {
  console.log("Positive number");
}

//8.If–Else
//Create a **boolean variable** (your choice of meaning).
//Tasks:
//Use `if / else` to log different messages depending on the boolean value
//Change the value and run the code again

//Answer
// Boolean variable to represent if I like rainy weather
let likesRain = true;

// Check the boolean value
if (likesRain) {
  console.log("I like rainy weather!");
} else {
  console.log("I do not like rainy weather!");
}

// Change the value and test again
likesRain = false;

if (likesRain) {
  console.log("I like rainy weather!");
} else {
  console.log("I do not like rainy weather!");
}

//9.Else If
//Write a program that:
//Takes a student’s score
//Prints:
// "Grade A"` if score > 90
// "Grade B"` if score > 80
// "Grade C"` if score ≥ 70
// "Fail" otherwise

// Answer
// You can change this score to test
// >_ //greater than or equal to
let score = 85;
if (score > 90) {
  console.log("Grade A");
} else if (score > 80) {
  console.log("Grade B");
} else if (score >= 70) {
  console.log("Grade C");
} else {
  console.log("Fail");
}
//10.Switch Statement
//Create a variable with multiple possible values** (string or number - your choice).
//Tasks:
//Use a `switch` statement
//Include at least 3 cases and a default
//Log different messages for each case
//Do two examples one with `break` and one without and see the difference.

let fruitt = "Apple";

switch (fruitt) {
  case "Apple":
    console.log("You chose Apple");
    break;
  case "Banana":
    console.log("You chose Banana");
    break;
  case "Orange":
    console.log("You chose Orange");
    break;
  default:
    console.log("Unknown fruit");
}
let fruit = "Apple";

switch (fruit) {
  case "Apple":
    console.log("You chose Apple");
  case "Banana":
    console.log("You chose Banana");
  case "Orange":
    console.log("You chose Orange");
  default:
    console.log("Unknown fruit");
}

// 11. Challenge (Optional - No hint)

let numberr = 25;

if (numberr < 0) {
  console.log("Negative number, we don't care!");
} else if (numberr <= 9) {
  console.log("Single digit number!");
} else if (numberr <= 99) {
  console.log("Double digit number!");
} else {
  console.log(
    "Definitely not a negative, single or double digit number, so it is something else!"
  );
}
