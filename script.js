// variable declaration three types var, let, const
var name = "John"; // function scoped
let age = 30; // block scoped
const country = "USA"; // block scoped and cannot be reassigned

// data types
let isStudent = true; // boolean
let score = 95; // number
let firstName = "Alice"; // string
let hobbies = ["reading", "gaming", "coding"]; // array
let person = { // object
    name: "Bob",
    age: 25,
    city: "New York"
};

//scope (global, function, block)
function greet() {
    let greeting = "Hello"; // function scoped
    console.log(greeting);
}
greet();
// console.log(greeting); // Uncaught ReferenceError: greeting is not defined
if (true) {
    let blockScoped = "I am block scoped";
    console.log(blockScoped);
}
// console.log(blockScoped); // Uncaught ReferenceError: blockScoped is not defined 


// reassignment and redeclaration
var name = "Jane"; // redeclaration allowed
name = "Doe";
// let age = 35; // Uncaught SyntaxError: Identifier 'age' has already been declared
age = 35;
// const country = "Canada"; // Uncaught SyntaxError: Identifier 'country' has already been declared
// country = "Canada"; // Uncaught TypeError: Assignment to constant variable.

//temporal dead zone
console.log(tempVar); // undefined due to hoisting
// console.log(tempLet); // Uncaught ReferenceError: Cannot access 'tempLet' before initialization
// console.log(tempConst); // Uncaught ReferenceError: Cannot access 'tempConst' before initialization
var tempVar = "I am a var";
let tempLet = "I am a let";
const tempConst = "I am a const";
 
// hoisting
hoistedFunction(); // Works due to hoisting
// hoistedLet(); // Uncaught ReferenceError: Cannot access 'hoistedLet' before initialization
// hoistedConst(); // Uncaught ReferenceError: Cannot access 'hoistedConst' before initialization
function hoistedFunction() {
    console.log("I am a hoisted function");
}
 
// why var leaks outside block but let does not.
if (true) {
    var blockVar = "I am a var inside block";
    let blockLet = "I am a let inside block";
}
console.log(blockVar); // Works due to var being function scoped
// console.log(blockLet); // Uncaught ReferenceError: blockLet is not defined due to let being block scoped

//why const allows change in object properties but not reassignment
const personObj = {
    name: "Charlie",
    age: 28
};
personObj.age = 29; // Allowed, we are changing a property of the object, not reassigning the variable
// personObj = { name: "Dave", age: 30 }; // Uncaught TypeError: Assignment to constant variable.

// why var can be redeclared but let and const cannot
var redeclareVar = "I can be redeclared";
var redeclareVar = "I am redeclared"; // Allowed
// let redeclareLet = "I cannot be redeclared";
// let rede
clareLet = "I am redeclared"; // Uncaught SyntaxError: Identifier 'redeclareLet' has already been declared
// const redeclareConst = "I cannot be redeclared";
// const redeclareConst = "I am redeclared"; // Uncaught SyntaxError: Identifier 'redeclareConst' has already been declared     

// 2. data types and type system
let num = 42; // number
let str = "Hello, World!"; // string
let bool = true;
let arr = [1, 2, 3]; // array
let obj = { name: "Alice", age: 30 };
let undef; // undefined
let nul = null; // null
console.log(typeof num); // "number"
console.log(typeof str);
console.log(typeof bool);
console.log(typeof arr); // "object" (arrays are objects in JavaScript)
console.log(typeof obj);
console.log(typeof undef); // "undefined"
console.log(typeof nul); // "object" (this is a quirk in JavaScript)

// primitives  and reference types
let primitiveStr = "Hello";
let referenceArr = [1, 2, 3];
// primitives are immutable
primitiveStr[0] = "h";  
console.log(primitiveStr); // "Hello" (unchanged)
// reference types are mutable
referenceArr[0] = 0;  
console.log(referenceArr); // [0, 2, 3] (changed)

//dynamic typing
let dynamicVar = "I am a string";
console.log(typeof dynamicVar); // "string"
dynamicVar = 100;
console.log(typeof dynamicVar); // "number"
dynamicVar = true;
console.log(typeof dynamicVar); // "boolean"

//typeof operator
console.log(typeof 42); // "number"
console.log(typeof "Hello"); // "string"
console.log(typeof true); // "boolean"
console.log(typeof undefined); // "undefined"
console.log(typeof null); // "object" (this is a quirk in JavaScript)
console.log(typeof [1, 2, 3]); // "object" (arrays are objects in JavaScript)
console.log(typeof { name: "Alice" }); // "object"

// type coercion
console.log("5" + 10); // "510" (string concatenation)
console.log("5" - 2); // 3 (string "5" is coerced to number)
console.log("5" * 2); // 10 (string "5" is coerced to number)
console.log("5" / 2); // 2.5 (string "5" is coerced to number)
console.log(5 + true); // 6 (true is coerced to 1)
console.log(5 + false); // 5 (false is coerced to 0)    

// truthy and falsy values
if (0) {
    console.log("This will not be printed"); // 0 is falsy
}
if ("") {
    console.log("This will not be printed"); // empty string is falsy
}
if (null) {
    console.log("This will not be printed"); // null is falsy
}
if (undefined) {
    console.log("This will not be printed"); // undefined is falsy
}
if (NaN) {
    console.log("This will not be printed"); // NaN is falsy
}
if (1) {
    console.log("This will be printed"); // 1 is truthy
}   
if ("Hello") {
    console.log("This will be printed"); // non-empty string is truthy
}   
if ([]) {
    console.log("This will be printed"); // empty array is truthy
}
if ({}) {
    console.log("This will be printed"); // empty object is truthy
}

// operators and expressions
let a = 10;
let b = 5;
console.log(a + b); // 15 (addition)
console.log(a - b); // 5 (subtraction)
console.log(a * b); // 50 (multiplication)
console.log(a / b); // 2 (division)
console.log(a % b); // 0 (modulus)
console.log(a ** b); // 100000 (exponentiation)
console.log(a > b); // true (greater than)
console.log(a < b); // false (less than)
console.log(a >= b); // true (greater than or equal to)
console.log(a <= b); // false (less than or equal to)
console.log(a == b); // false (equality)
console.log(a === b); // false (strict equality)
console.log(a != b); // true (inequality)
console.log(a !== b); // true (strict inequality)   

// logical operators
let x = true;
let y = false;
console.log(x && y);

// false (logical AND)
console.log(x || y);
// true (logical OR)
console.log(!x);
// false (logical NOT)  

//unary and binary operators
let num1 = 5;
let num2 = 10;
console.log(-num1); // -5 (unary negation)
console.log(num1 + num2); // 15 (binary addition)

//tarnary operator
let age1 = 20;
let isAdult = age1 >= 18 ? "Yes" : "No";
console.log(isAdult); // "Yes" (ternary operator)

//typeof and instanceof operators
console.log(typeof num1); // "number"
console.log(typeof "Hello"); // "string"
console.log(typeof true); // "boolean"
console.log(typeof undefined); // "undefined"
console.log(typeof null); // "object" (this is a quirk in JavaScript)
console.log(typeof [1, 2, 3]); // "object" (arrays are objects in JavaScript)
console.log(typeof { name: "Alice" }); // "object"
console.log([] instanceof Array); // true (checks if [] is an instance of Array)    
console.log({} instanceof Object); // true (checks if {} is an instance of Object)



