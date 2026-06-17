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

// operator precedence
let result = 10 + 5 * 2;    
console.log(result); // 20 (multiplication has higher precedence than addition)
result = (10 + 5) * 2;    
console.log(result); // 30 (parentheses change the order of evaluation)

// if else else-if switch case early return pattern
let score1 = 85;
if (score1 >= 90) {
    console.log("Grade: A");
} else if (score1 >= 80) {
    console.log("Grade: B");
}
else if (score1 >= 70) {
    console.log("Grade: C");
}   
else if (score1 >= 60) {
    console.log("Grade: D");
}
else {
    console.log("Grade: F");
}

//switch case
let day = 3;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;  
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;  
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;  
    default:
        console.log("Invalid day");
}

//early return pattern
function isEven(num) {
    if (num % 2 !== 0) {
        return false; // early return for odd numbers
    }   
    return true; // return true for even numbers
}
console.log(isEven(4)); // true
console.log(isEven(7)); // false

// rock paper scissors game
function playRPS(player1, player2) {
    if (player1 === player2) {  
        return "It's a tie!";
    }
    if ((player1 === "rock" && player2 === "scissors") ||
        (player1 === "paper" && player2 === "rock") ||
        (player1 === "scissors" && player2 === "paper")) {  
        return "Player 1 wins!";
    }   
    return "Player 2 wins!"; // Player 2 wins in all other cases
}
console.log(playRPS("rock", "scissors")); // "Player 1 wins!"
console.log(playRPS("paper", "rock")); // "Player 1 wins!"
console.log(playRPS("scissors", "paper")); // "Player 1 wins!"
console.log(playRPS("rock", "paper")); // "Player 2 wins!"
console.log(playRPS("paper", "scissors")); // "Player 2 wins!"
console.log(playRPS("scissors", "rock")); // "Player 2 wins!"
console.log(playRPS("rock", "rock")); // "It's a tie!"
console.log(playRPS("paper", "paper")); // "It's a tie!"
console.log(playRPS("scissors", "scissors")); // "It's a tie!"

//loops (for, while, do-while)
for (let i = 0; i < 5; i++) {
    console.log(i); // prints 0 to 4
}
let j = 0;
while (j < 5) {
    console.log(j); // prints 0 to 4
    j++;
}
let k = 0;
do {
    console.log(k); // prints 0 to 4
    k++;
} while (k < 5);

// break and continue
for (let i = 0; i < 10; i++) {
    if (i === 5) {  
        break; // exits the loop when i is 5
    }           
    console.log(i); // prints 0 to 4    
}
for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {  
        continue; // skips the rest of the loop body for even numbers
    }           
    console.log(i); // prints odd numbers from 1 to 9    
}

// user input and output
let userName = prompt("Enter your name:");
alert("Hello, " + userName + "!");

// stop at first multiple of 7 
// write a loop from 1 to 100 that prints each number and stops completely when it finds the first number divisible by 7
for (let i = 1; i <= 100; i++) {
    console.log(i); // prints the current number
    if (i % 7 === 0) {
        break; // stops the loop when a number divisible by 7 is found
    }   
} 

// skip multiples of 3 
// write a loop from 1 to 50 that prints all others and  skips numbers divisible by .use continue
for (let i = 1; i <= 50; i++) {
    if (i % 3 === 0) {
        continue; // skips numbers divisible by 3
    }
    console.log(i); // prints numbers that are not divisible by 3
}

// print first 5 odd numbers only 
// write a loop from 1 to 100 that prints only the first 5 odd numbers and then stops completely.use both if,continue,and a counter + break
let oddCount = 0;
for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        continue; // skips even numbers
    }   
    console.log(i); // prints odd numbers
    oddCount++;
    if (oddCount === 5) {
        break; // stops the loop after printing the first 5 odd numbers
    }
}


// start function
// function declarations,expressions,and arrow functions
function greet(name) {
    return "Hello, " + name + "!";
}
console.log(greet("Alice")); // "Hello, Alice!"
const greetExpression = function(name) {
    return "Hello, " + name + "!";
};  
console.log(greetExpression("Bob")); // "Hello, Bob!"
const greetArrow = (name) => {
    return "Hello, " + name + "!";
};
console.log(greetArrow("Charlie")); // "Hello, Charlie!"

// parameters and arguments
function add(a, b) {
    return a + b;
}
console.log(add(5, 10)); // 15 (arguments passed to parameters a and b)

// default ,rest, and spread operators
function greetWithDefault(name = "Guest") {
    return "Hello, " + name + "!";
}
console.log(greetWithDefault()); // "Hello, Guest!" (default parameter)
console.log(greetWithDefault("Alice")); // "Hello, Alice!" (argument provided)
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3)); // 6 (rest parameter collects arguments into an array)
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combinedArr = [...arr1, ...arr2];
console.log(combinedArr); // [1, 2, 3, 4, 5, 6] (spread operator expands arrays into individual elements)

// return values and early returns
function isEven(num) {
    if (num % 2 !== 0) {
        return false; // early return for odd numbers
    }
    return true; // return true for even numbers
}
console.log(isEven(4)); // true
console.log(isEven(7)); // false

// first class function(assign to variable , pass as argument, return from another function)
function greet(name) {
    return "Hello, " + name + "!";
}
const greetFunc = greet; // assign function to a variable
console.log(greetFunc("Alice"));
function callGreet(func, name) {
    return func(name); // pass function as an argument
}
console.log(callGreet(greet, "Bob")); // "Hello, Bob!"
function createGreeter(greeting) {
    return function(name) { // return a function from another function  
        return greeting + ", " + name + "!";
    }
}
const greeter = createGreeter("Hi");
console.log(greeter("Charlie")); // "Hi, Charlie!"  

// higher order functions (map, filter, reduce)
const numbers = [1, 2, 3, 4, 5];
const squared = numbers.map(num => num * num);
console.log(squared); // [1, 4, 9, 16, 25] (map creates a new array with the results of calling a function on every element)
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers);
// [2, 4] (filter creates a new array with all elements that pass the test implemented by the provided function)
const sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum); // 15 (reduce applies a function against an accumulator and each element to reduce it to a single value)

//pure vs impure functions
function pureAdd(a, b) {
    return a + b; // pure function: returns the same output for the same input and has no side effects
}   
console.log(pureAdd(5, 10)); // 15
let count = 0;
function impureIncrement() {
    count++; // impure function: modifies external state (side effect)
    return count;
}
console.log(impureIncrement()); // 1
console.log(impureIncrement()); // 2 (output changes due to side effect)

// closures and lexical scoping
function outer() {
    let outerVar = "I am from the outer function";
    function inner() {
        console.log(outerVar); // inner function has access to outer function's variable due to closure
    }
    return inner;
}
const innerFunc = outer();
innerFunc(); // "I am from the outer function" (closure allows inner function to access outerVar even after outer has finished executing)

// lexical scoping example
function outerFunction() {
    let outerVar = "I am an outer variable";
    function innerFunction() {
        let innerVar = "I am an inner variable";
        console.log(outerVar); // Accessing outer variable (lexical scoping)
        console.log(innerVar); // Accessing inner variable
    }   
    innerFunction();
    // console.log(innerVar); // Uncaught ReferenceError: innerVar is not defined (innerVar is not accessible here)
}
outerFunction();

// IIFE (Immediately Invoked Function Expressions)
(function() {
    console.log("This is an IIFE"); // IIFE is a function that runs as soon as it is defined
})(); // Output: "This is an IIFE"

//hoisting difference between function declaration and function expression

// use rest parameter to accept any number of scores and return the total
function totalScore(...scores) {

    let total=0;
    scores.forEach(function(val){
        total+=val;
    });
    return total;
}
console.log(totalScore(85, 90, 78)); // 253 (rest parameter collects arguments into an array and reduce sums them up)   

// can you assign a function to a variable and then call it? demonstrate with an example.
const greet = function(name) {
    return "Hello, " + name + "!";
};
console.log(greet("Alice")); // "Hello, Alice!" (function assigned to a variable and called)

// pass a function into another function and execute it inside.
function executeFunction(func, name) {
    return func(name); // pass function as an argument and execute it
}

// create ,access,modify arrays
let fruits = ["apple", "banana", "cherry"]; // create an array
console.log(fruits[0]); // access first element (apple)
fruits[1] = "blueberry"; // modify second element
console.log(fruits); // ["apple", "blueberry", "cherry"]    

// array methods: push,pop,shift,unshift,slice,splice,reverse,sort
fruits.push("date"); // add element to the end
console.log(fruits);   // ["apple", "blueberry", "cherry", "date"]
fruits.pop(); // remove last element
console.log(fruits);    // ["apple", "blueberry", "cherry"]
fruits.shift(); // remove first element
console.log(fruits);   // ["blueberry", "cherry"]
fruits.unshift("apricot"); // add element to the beginning
console.log(fruits);   // ["apricot", "blueberry", "cherry"]
let slicedFruits = fruits.slice(1, 3); // create a new array from index 1 to 2
console.log(slicedFruits); // ["blueberry", "cherry"]
fruits.splice(1, 1, "blackberry"); // remove 1 element at index 1 and add "blackberry"
console.log(fruits);   // ["apricot", "blackberry", "cherry"]
fruits.reverse(); // reverse the array
console.log(fruits);   // ["cherry", "blackberry", "apricot"]
fruits.sort(); // sort the array
console.log(fruits);   // ["apricot", "blackberry", "cherry"]       

// map, filter ,reduce,find,some,every (array methods intro level)
const numbers = [1, 2, 3, 4, 5];
const squared = numbers.map(num => num * num);
console.log(squared); // [1, 4, 9, 16, 25] (map creates a new array with the results of calling a function on every element)
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // [2, 4] (filter creates a new array with all elements that pass the test implemented by the provided function)
const sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum); // 15 (reduce applies a function against an accumulator and each element to reduce it to a single value)
const found = numbers.find(num => num > 3);
console.log(found); // 4 (find returns the first element that satisfies the provided testing function)
const hasEven = numbers.some(num => num % 2 === 0);
console.log(hasEven); // true (some tests whether at least one element in the array passes the test implemented by the provided function)
const allEven = numbers.every(num => num % 2 === 0);
console.log(allEven); // false (every tests whether all elements in the array pass the test implemented by the provided function)   

// forEach, for...of, for...in (array and object iteration)
const fruits = ["apple", "banana", "cherry"]; 
fruits.forEach(fruit => console.log(fruit)); // prints each fruit in the array
for (const fruit of fruits) {
    console.log(fruit); // prints each fruit in the array
}
const person = { name: "Alice", age: 30, city: "New York" }; // object to iterate
for (const key in person) {
    console.log(key + ": " + person[key]); // prints each key and value in the object
}

// destructuring,spread operator
const person = { name: "Alice", age: 30, city: "New York" };
const { name, age } = person; // object destructuring
console.log(name); // "Alice"
console.log(age); // 30
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combinedArr = [...arr1, ...arr2];
console.log(combinedArr); // [1, 2, 3, 4, 5, 6] (spread operator expands arrays into individual elements)













