const person = {
  name: "Islom",
  age: 21,
  isProgrammer: false,
  languages: ["ru", "eng", "uzb"],
  ["this is complex"]: true,
  [Date.now()]: "",
  ["key_" + (1 + 3)]: "computer keys",
  greet() {
    return person.name + " " + person.age;
  },
  info() {
    // console.log(this);
    return this.name;
  },
};

/* console.log(person.name); // Dot Notation
console.log(person["age"]); // Bracket notation for complex
console.log(person.greet());

// CRUD
person.age++;
person.languages.push("kr");
person["key_4"] = undefined;
delete person["key_4"];
console.log(person); */

//! Destructe
/* // Destructing in javascript basically means the breaking down of a complex structure(Objects or arrays) into simpler parts.
//Before ES6
let name5 = person.name;
let languages5 = person.languages;
//ES6
const { name = "Islombek by default", languages, age: personAge } = person;
console.log(name, languages, personAge); */

//! Looping object
//For in is not useable might access _proto
/* for (let key in person) {
  if (person.hasOwnProperty(key)) console.log(key, ":", person[key]);
} */

/* const keys = Object.keys(person).forEach((key) => {
  console.log(key, ":", person[key]);
}); */

//! Context this
//Methods can reference the object as this.
// console.log(person.info());
const logger = {
  keys() {
    return Object.keys(this);
  },
  keysAndValues() {
    Object.keys(this).forEach((key) => {
      console.log(this[key]);
    });
  },
};
// console.log(logger.keys(person));
// const bound = logger.keys.bind(logger); // return new function
// console.log(bound);
logger.keysAndValues.call(person);
