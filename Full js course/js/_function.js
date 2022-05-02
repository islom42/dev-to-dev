//Function
//! 1 Function declaration vs expression
function greet(name) {
  console.log("Hello " + name);
}
//==================
const greet2 = function (name) {
  console.log("Hello from expression " + name);
};
//! 2 Anynomus function - no name
let counter = 0;
const interval = setInterval(function () {
  if (counter === 5) {
    clearInterval(interval);
  } else {
    console.log(counter++);
  }
}, 1000);
//=======================================

//! 3 Arrow function =>

const greet3 = () => {
  console.log(counter);
}
//=======================================

//! 4 Default parametrs
const sum = (a = 5, b = a * 2) => {
  return a + b
}

//! 5 Spread operator
const sumOfAll = (...sum) => {
  console.log(sum);
}
console.log(sumOfAll(1, 2, 3)); // array

//! 6 Clouser
function createMember(name) {
  return function(lastName){
    console.log(name + " " + lastName);
  }
}
const logWithLastName = createMember("Islom");
console.log(logWithLastName("Numanov"));


