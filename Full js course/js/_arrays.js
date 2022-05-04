const cars = ["Mazda", "BMW", "Malibu"];
const fib = [1, 1, 2, 3, 5, 8, 13, 21];

//function
function addItemToEnd() {}

//! Adding element
// cars.push("Nexia") // to end
// cars.unshift("Matiz") // to the beginning
// console.log(cars);

//! Deleting Element
// const firstItem = cars.shift() // delete and assign to another variable
// const lastItem = cars.pop()
// console.log(cars, firstItem, lastItem);

//! reverse()
// fib.reverse()
// console.log(fib);

// Task 1 reverseString
// const text = "I want to be A JavaScript Developer"
// const reversedText = text.split("").reverse().join("")
// console.log(reversedText);

//! IndexOf
// const indexOfBMW = cars.indexOf("BMW")
// cars[indexOfBMW] = "Changed"
// console.log(cars);

//! findIndex]
// const people = [
//   {
//     name: "Islom",
//     job: "Developer"
//   },
//   {
//     name: "Nozima",
//     job: "Teacher"
//   },
//   {
//     name: "John",
//     job: "Developer"
//   }
// ]
// const index = people.findIndex((item, index) => {
// console.log(item, index);
//   return item.job === "Developer"
// })
// const person = people.find((person) => {
//   return person.job === "Developer"
// })
// console.log(person);

//includes() true/false
// console.log(cars.includes("Malibu"));

//! map() - returns array
// const upperCase = cars.map((item, index) => {
//   return item.toUpperCase();
// });
// console.log(upperCase);
// console.log(cars);

// const pow2Fib = fib.map((num) => num ** 2);
// console.log(pow2Fib, fib);

//! filter()
console.log(fib.filter((item) => item > 5));

//! reduce()
const people = [
  {
    name: "Islom",
    job: "Developer",
    budjet: 2500,
  },
  {
    name: "Nozima",
    job: "Teacher",
    budjet: 2500,
  },
  {
    name: "John",
    job: "Developer",
    budjet: 1000,
  },
];
const person = people
  .filter((person) => person.budjet > 1000)
  .reduce(function (acc, person) {
    acc += person.budjet;
    return acc;
  }, 0);
console.log(person);
