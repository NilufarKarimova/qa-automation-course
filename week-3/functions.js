console.log("Hello world!");
console.log("Hello world!");

// 1. Greeting a Function

function greet() {
  const addition = 2 + 5;
  console.log(addition);
}

greet(); // I am calling the function -> Giving instruction to js to make my function work

//2 Function with a single parameter
//Name inside paranthesis is call parameter
function newGreet(name) {
  console.log(`Hello ${name} welcome to the class`);
}

newGreet("Muhammad");

// 3. Function with multiple parameters

function add(num1, num2, num3, num4, num5) {
  // I can name my function anything. instate of add I can write Nilufar or somthing else
  console.log(num1);
  console.log(num2);
  console.log(num3);
  console.log(num4);
  console.log(num5);
}
add(1, 2, 3, 4, 5);

function printNumber(num1, num2) {
  if (num1 > num2) {
    console.log("Number is bigger");
  } else {
    console.log("Number is smaller");
  }
}
printNumber(3, 1);

// 4. Default Parameters

function greetStudent(name = "student") {
  console.log(`Hello ${name}, welcome to JavaScript class`);
}
greetStudent("Alex");

// 5. Return values

function addNewNumbers(num1, num2) {
  return num1 + num2;
}

const functionResult = addNewNumbers(3, 6);

console.log(functionResult);

// or
function addNewNumbersTwo(num1, num2) {
  const result = num1 + num2;
  return result;
}

const functionResultTwo = addNewNumbers(3, 6);

console.log(functionResultTwo);

// 6. Arrow Functions

const greetStudentsTwo = (student) => {
  console.log(`Hello ${student}, welcome to class!`);
};
greetStudentsTwo("Bohdana");

// another
const subtractTwoNumber = (num1, num2) => num1 - num2;
const resultTwo = subtractTwoNumber(5, 3);

console.log(resultTwo + 22);

function generateRandomNumber(number) {
  return 2;
}
const array = ["blue", "Red", "green"];

const randomNumber = generateRandomNumber();
console.log(array[randomNumber]);
