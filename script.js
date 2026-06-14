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




