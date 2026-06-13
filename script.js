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




