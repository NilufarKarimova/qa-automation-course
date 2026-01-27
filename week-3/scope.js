// 1 Global Scope

let globalVar = "I am global";
console.log(globalVar);

function printSomething() {
  if (14 > 2) {
    console.log(globalVar);
  }
  console.log(globalVar);
}
printSomething();

// 2 Function Scope

function greet() {
  const age = 50;
  let message = `Hello from inside the function! You age is ${age}`;
  console.log(message);
  console.log(age);
}

greet();
//console.log(message); --- Does not print -> error
//console.log(age); --- Does not print -> error

// 3 Block Scope

if (14 > 5) {
  const myDogName = "Riki";
}

//console.log(myDogName);
