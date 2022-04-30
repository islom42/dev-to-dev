//! 1 Variables
//let const var
let firstName = "Islom"; // string
// var surName = "Numanov";
const age = 20;
const dayOfBirth = 12; // number
const isProgrammer = true; // Boolean

const _ = "Valid sign _";
const $ = "It is also valid sign";
// const 1str = "Not valid"
//==========================================
//! 2 Concatination
console.log("Your name is " + firstName + " and your age is " + age);
// alert();
// prompt();
//==========================================
//! 3 Operators
let currentYear = new Date().getFullYear();
const birthYear = 2001;
let c = 5;
console.log(currentYear - birthYear);
console.log(currentYear + birthYear);
console.log(currentYear * birthYear);
console.log(currentYear / birthYear);
console.log(currentYear++);
console.log(++currentYear);
console.log(currentYear--);
console.log(--currentYear);

c += birthYear; // c = c + birthDay
c -= birthYear;
c *= birthYear;
c /= birthYear;
//==========================================

//! 4 Data type
// typeof - checks type of value
let str = "String"; // String
let num = 5; // Number
let bool = true; // Boolean
let undef; // undefinded
let nul = null; // null
//==========================================

//! 5 Operator precedence
/* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence */
//==========================================

//! 6 Condition
const courseStatus = "Ready";
if (courseStatus === "Ready") console.log("Are you ready for course");
else if (courseStatus === "Pending") console.log("Course have not ready yet");
else {
  console.log("Course will not ready");
}
// == loose equal
// === strict equal
//! Ternary operator
console.log(5 > 6 ? "Yes it is greater" : "Not it is");
//==========================================

//! 7 Boolean Logic
// || or, &&-and, !-not
//==========================================

//! 8 Function
function calcAge(year = 2001) {
  let currentYear = new Date().getFullYear();
  return currentYear - year
}
const myAge = calcAge(1993)
console.log(myAge);

function logInAbout(name = "Islom", year = 2001){
  const age = calcAge(year)
  console.log("Name of user is " + name + ' and his age is ' + age);
}
logInAbout()
//==========================================

//! 9 Arrays
const newCarsWiithNewKeyword = new Array("Mazda", "BMW")
const cars = ["Mazda", "BMW", "Malibu"]
//index         0        1       2
//length => cars.length *cars.length - 1
cars[0] = "Porche"

//! 10 Loop
const carsNew = ["Mazda", "BMW", "Malibu"]
for(let i = 0; i < carsNew.length; i++){
  // console.log(i);
  const car = carsNew[i]
  console.log(car);
}
// for of loop feature to iterati array
for (let car of carsNew){
  console.log(car);
}
//==========================================

//! 11 Object
const person = {
  key: value,
  name: "Islom",
  lastName: "Numanov",
  year: 2001,
  language: ["Uzbek", "Russian", "English"],
  greet: function(){
    console.log("Hello world!");
  },
  wife: false
}
// like console.log
console.log(person.name);
console.log(person.greet());