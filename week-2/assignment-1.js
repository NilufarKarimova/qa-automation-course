//Arithmetic Operators

//1. Create two numbers and:
//- Add them
//- Subtract them
//- Multiply them
//- Divide them

//  Print each result.

let number1 = 6;
let number2 = 8;

// Add them
console.log(number1 + number2);

// Subtract them
console.log(number1 - number2);

// Multiply them
console.log(number1 * number2);

// Divide them
console.log(number1 / number2);

//2. Create a number and:
// - Increase it by 1 using an operator
// - Decrease it by 1 using an operator
//  Print the value after each change.

let n1 = 88;
n1++;
console.log(n1);
n1--;
console.log(n1);

//3. Create two numbers and print:
// - The remainder when the first is divided by the second

let a = 100;
let b = 55;
console.log(a % b);

//Create a number and raise it to the power of 3.
let n2 = 7;
console.log(n2 ** 3);

//Part 2: Comparison Operators

//1. Create two variables:
//- One number
//- One string with a number inside

//Compare them using `===` and print the result.

let dog = 4;
let cat = "6";
console.log(dog === cat); //false

//2. Create two different numbers and:
//- Check if the first is greater than the second
//- Check if the first is less than the second

let n3 = 20;
let n4 = 33;
console.log(n3 > n4);
console.log(n3 < n4);

//3. Create two values and check if they are **not equal** using `!==`.

let nancy = 65;
let nancy1 = 67;
console.log(nancy !== nancy1);

//Part 3: Logical Operators
//1. Create two comparison expressions and combine them using `&&`.
//Print the result.

let n6 = 91 > 81;
let n7 = 66 < 88;
console.log(n6 && n7); //True

//2. Create two comparison expressions and combine them using `||`.
//Print the result.
let nancy3 = 52 > 43;
let nancy4 = 32 < 54;
if (nancy3 || nancy4) {
  console.log("Nancy my friend");
}

//3. Create a boolean variable and:
//- Reverse its value using `!`
//- Print the result

let isTomorrowFriday = true;
console.log("Is it Friday Tommorrow?", !isTomorrowFriday);

//Part 4: Truthy vs Falsy

//1. Create a variable with a value that is **falsy**.
//- Use it in an `if` statement
//- Print `"Falsy value detected"` if it runs

let userId = "";
if (!userId) {
  console.log("Falsy value detected");
}

//2. Create a variable with a value that is **truthy**.
//- Use it in an `if` statement
//- Print `"Truthy value detected"` if it runs

let userId2 = "123";
if (userId2) {
  console.log("Truly value detected");
}

//3. Create a variable and use `||` to give it a **default value**.
//- Print the final value.
//Since I have used number use a different data type.

let areYouHungry = null;
let answer = areYouHungry || "Yes I am hungry";
console.log("Are you hungry?", answer);

//Challenge (Optional ⭐)
//Create a variable called `username`.
//If it exists (truthy), print `"Welcome back"`
//Otherwise, print `"Please sign up"`
//Use **logical** operators only.

let username = "Nilufar";
if (username) {
  console.log("Welcome back");
} else if (!username) {
  console.log("Please sign up");
}
