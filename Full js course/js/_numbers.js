//Number
const num1 = 45; // integer
const float = 45.43; // float point number
const pow = 10e3;

console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991 => 2 ** 53 - 1
console.log(Math.pow(2, 53));
console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991 =>
console.log(Number.MAX_VALUE); // 1.7976931348623157e+308
console.log(Number.MIN_VALUE); //5e-324
console.log(Number.NEGATIVE_INFINITY);// 1 / 0
console.log(Number.NaN); // 2 / "str" type number but Not a number
const weird = 2 / undefined
console.log(isNaN(weird));
console.log(Number.isFinite(Infinity)); //true
console.log(Number.isFinite(42)); //false
//======================================
const stringInt = "42"
console.log(Number.parseInt(stringInt));
console.log(Number(stringInt));
const stringFloat = "42.22"
console.log(Number.parseFloat(stringFloat));
console.log(parseFloat((0.4 + 0.2).toFixed(1)));
//======================================

//! BigInt
console.log(900719925474099156565656n);
// console.log(900719925474099156565656.123n); //error
// console.log(10n - 4); //error
console.log(parseInt(10n) - 4);
console.log(10n - BigInt(4));

//! Math

const PI = Math.PI

console.log(PI)                            // 3.141592653589793

// Rounding to the closest number
// if above .5 up if less 0.5 down rounding

console.log(Math.round(PI))                // 3 to round values to the nearest number

console.log(Math.round(9.81))              // 10

console.log(Math.floor(PI))                // 3 rounding down

console.log(Math.ceil(PI))                 // 4 rounding up

console.log(Math.min(-5, 3, 20, 4, 5, 10)) // -5, returns the minimum value

console.log(Math.max(-5, 3, 20, 4, 5, 10)) // 20, returns the maximum value

const randNum = Math.random() // creates random number between 0 to 0.999999
console.log(randNum)

// Let us  create random number between 0 to 10

const num = Math.floor(Math.random () * 11) // creates random number between 0 and 10
console.log(num)

//Absolute value
console.log(Math.abs(-10))      // 10

//Square root
console.log(Math.sqrt(100))     // 10

console.log(Math.sqrt(2))       // 1.4142135623730951

// Power
console.log(Math.pow(3, 2))     // 9

console.log(Math.E)             // 2.718

// Logarithm
// Returns the natural logarithm with base E of x, Math.log(x)
console.log(Math.log(2))        // 0.6931471805599453
console.log(Math.log(10))       // 2.302585092994046

// Returns the natural logarithm of 2 and 10 respectively
console.log(Math.LN2)           // 0.6931471805599453
console.log(Math.LN10)          // 2.302585092994046

// Trigonometry
Math.sin(0)
Math.sin(60)

Math.cos(0)
Math.cos(60)