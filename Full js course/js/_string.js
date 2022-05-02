// String
const user = "Islom"
let age = 20
// console.log("User " + user + " age is " + age);// not best
//! String literal
console.log(`User ${user} and his age ${age}`);
const output =  `
<div>Hello world</div>
<h1>Heading one</h1>
`
//! built-in methods
console.log(user.toLowerCase());
console.log(user.toUpperCase());
console.log(user.charAt(4));
console.log(user.indexOf("m"));
console.log(user.startsWith("i"));
console.log(user.endsWith("i"));
console.log(user.repeat(3));
console.log(user.replace("Islom", "Front-end"));
console.log(user.trim());

//===============================
function logPerson(s, name, age) {
  return `${s[0]}${name}${s[1]}`
}
let nameOfSynt = "New"
let surOfSynt = "new"
const outputOfFunction = logPerson`Name ${nameOfSynt} and surname ${surOfSynt}`
console.log(outputOfFunction);
