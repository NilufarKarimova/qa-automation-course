//1. Syntax Eror

let studentName = "Alice";
console.log(studentName);

const soccerPlayer = {
  playName: "Ronaldo",
  age: 41,
};
console.log(soccerPlayer);

// 2. Reference error
const age = 21;

console.log(age);

//3.Type Error

let num = 5;
//num.toUpperCase(); -> Does not work

//4. Range error
const str = "hi";
console.log(str.repeat(3)); //when you put -3, negative number it show error
