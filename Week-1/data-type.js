// 1 String
const name = "Nilu";
const myName = "Nilufar";
const studentName = "Bohdana";

console.log(name);
console.log(myName);
console.log(studentName);

// Number

const birthYear = 1980;
const carModel = 2024;
const studentScore = 90.5;

console.log(birthYear);
console.log(carModel);
console.log(studentScore);

// 3 Boolean
// The is off when you enter the room
let isLightOn = false;
console.log("Is the light on?", isLightOn);

// Later, someone comes and turn on the light

isLightOn = true;

console.log("Is the light on?", isLightOn);

// 4. Null
//. In the assinned seats in a party, it is 4pm nobody has arrived so it is null.
let seatOwner = null;
console.log("Seat status:", seatOwner);

//party starts at 5pm, the seat has an owner now.

seatOwner = "Bohdana";
console.log("Seat status:", seatOwner);

//Undefined
//Before teacher cheking attendance
let studentPresent;
console.log("Student present?", studentPresent);
//After teacher cheking attendance
studentPresent = "Yes";
console.log("Student present?", studentPresent);

// 6. Array (non-primitive)

// Make your variable name descriptive, try to use same data type.
const colors = ["red", "green", "blue"];
console.log(colors);

const studentScores = [70, 85, 88, 95];
console.log(studentScore);

//Note Recommend for arrays!!! - Array that has all kind of data types
const array = ["johnathan", 30, true];

// 7. Object (Non-primiteve) -> Curley braces
// Left side inside curley braces is "keys" and the right side is "values"

let person = {
  name: "Alex",
  age: 42,
  isStudent: false,
  favoriteFruits: ["banana", "apple", "mango"],
};
console.log(person);

let soccerPlayer = {
  name: "Cristiano",
  age: 41,
  isSoccerPlayer: true,
  country: {
    countryName: "Saudy Arabia",
    city: "Riyadh",
    zipCode: "567890",
  },
};
console.log(soccerPlayer);
// Accessing a key in an object
console.log(soccerPlayer.country);
