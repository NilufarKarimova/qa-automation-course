let age = 24;
// 1. If - Example when the condition is true
// if is keyword
// Inside parenthesis (), we need to give a condition.
// Inside curley breaces {}, we have provide the code that we want it to run if the condition is true.

if (age > 18) {
  console.log("Hey, you are at age that you can go to college!!!");
}

//2. If - Example when the condition is fale

age = 13;
if (age > 18) {
  console.log("Hey, you are at age that you can go to college!!!");
}
console.log(age);

// 3 Else if

let studentScore = 75;

if (studentScore > 90) {
  console.log("Grade A");
} else if (studentScore > 75) {
  console.log("Grade B");
}
//4 Else
let isRaining = false;
if (isRaining) {
  console.log("Take your umbrella with you, you are going to get wet!");
} else {
  console.log("You dont need umbrella, it's sunny outside!");
}

// 5. If, Else If, Else
let goalScore = 8;
if (goalScore > 4) {
  console.log("You are winning");
} else if (goalScore === 3) {
  console.log("You are losing");
} else {
  console.log("It is a time");
}

//switch Statement
let day = 2;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thurday");
    break;
  case 5:
    console.log("Friday");
    break;
  default:
    console.log("I was waiting for this day!");
}
