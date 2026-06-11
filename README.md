# JavaScript---Learn-Everything
Learn everything about JavaScript  from the absolute basics to advanced concepts, explained in the simplest way possible. Whether you're a beginner or just revising, this is the only video you’ll ever need to master JavaScript.
# JavaScript Complete Learning Roadmap 🚀

> A complete roadmap to learn JavaScript from Beginner to Advanced.

---

# Table of Contents

1. Introduction
2. JavaScript Basics
3. Variables & Data Types
4. Operators
5. Control Flow
6. Functions
7. Arrays
8. Objects
9. ES6+ Features
10. DOM Manipulation
11. Events
12. Asynchronous JavaScript
13. Error Handling
14. Object-Oriented Programming
15. Functional Programming
16. Modules
17. Browser Storage
18. APIs & Fetch
19. Advanced JavaScript
20. Design Patterns
21. Testing
22. Performance Optimization
23. JavaScript in Node.js
24. Projects
25. Interview Preparation

---

# 1. Introduction

## What is JavaScript?

JavaScript is a high-level, interpreted programming language used to build:

- Websites
- Web Applications
- Mobile Applications
- Backend Servers
- Desktop Applications

## Where JavaScript Runs

- Browser
- Node.js Runtime
- Mobile Devices
- Desktop Applications

---

# 2. JavaScript Basics

## Hello World

```javascript
console.log("Hello World");
```

## Comments

```javascript
// Single Line Comment

/*
Multi Line Comment
*/
```

---

# 3. Variables & Data Types

## Variables

```javascript
var name = "John";
let age = 25;
const country = "Bangladesh";
```

## Primitive Data Types

### String

```javascript
let name = "Mohibullah";
```

### Number

```javascript
let age = 25;
```

### Boolean

```javascript
let isStudent = true;
```

### Null

```javascript
let data = null;
```

### Undefined

```javascript
let value;
```

### Symbol

```javascript
let sym = Symbol("id");
```

### BigInt

```javascript
let big = 12345678901234567890n;
```

---

# 4. Operators

## Arithmetic Operators

```javascript
+
-
*
/
%
**
```

## Comparison Operators

```javascript
==
===
!=
!==
>
<
>=
<=
```

## Logical Operators

```javascript
&&
||
!
```

---

# 5. Control Flow

## if else

```javascript
if(age >= 18){
    console.log("Adult");
}else{
    console.log("Minor");
}
```

## Switch

```javascript
switch(day){
    case "Monday":
        break;
}
```

## Loops

### For Loop

```javascript
for(let i = 0; i < 5; i++){
    console.log(i);
}
```

### While Loop

```javascript
while(condition){
}
```

### Do While

```javascript
do{
}while(condition);
```

---

# 6. Functions

## Function Declaration

```javascript
function greet(name){
    return `Hello ${name}`;
}
```

## Function Expression

```javascript
const greet = function(name){
    return name;
};
```

## Arrow Function

```javascript
const greet = (name) => {
    return name;
};
```

---

# 7. Arrays

## Create Array

```javascript
const numbers = [1,2,3];
```

## Common Methods

```javascript
push()
pop()
shift()
unshift()
slice()
splice()
includes()
indexOf()
find()
filter()
map()
reduce()
forEach()
some()
every()
sort()
```

---

# 8. Objects

## Object Creation

```javascript
const user = {
    name: "Mohibullah",
    age: 25
};
```

## Access Properties

```javascript
user.name;
user["name"];
```

## Object Methods

```javascript
Object.keys()
Object.values()
Object.entries()
```

---

# 9. ES6+ Features

## Template Literals

```javascript
const msg = `Hello ${name}`;
```

## Destructuring

```javascript
const {name, age} = user;
```

## Spread Operator

```javascript
const arr2 = [...arr1];
```

## Rest Operator

```javascript
function sum(...numbers){}
```

## Optional Chaining

```javascript
user?.address?.city
```

## Nullish Coalescing

```javascript
value ?? "default"
```

---

# 10. DOM Manipulation

## Select Elements

```javascript
document.getElementById()
document.querySelector()
document.querySelectorAll()
```

## Modify Elements

```javascript
element.textContent
element.innerHTML
element.style
```

## Create Elements

```javascript
const div = document.createElement("div");
```

---

# 11. Events

## Click Event

```javascript
button.addEventListener("click", () => {
    console.log("Clicked");
});
```

## Common Events

```javascript
click
submit
change
input
keydown
keyup
mouseover
```

---

# 12. Asynchronous JavaScript

## Callback

```javascript
setTimeout(() => {
    console.log("Done");
}, 1000);
```

## Promise

```javascript
const promise = new Promise((resolve, reject)=>{
});
```

## Async Await

```javascript
async function getData(){
    const result = await fetch(url);
}
```

---

# 13. Error Handling

```javascript
try{
    
}catch(error){
    
}finally{
    
}
```

---

# 14. Object-Oriented Programming

## Constructor Function

```javascript
function User(name){
    this.name = name;
}
```

## Class

```javascript
class User{
    constructor(name){
        this.name = name;
    }
}
```

## Concepts

- Encapsulation
- Inheritance
- Polymorphism
- Abstraction

---

# 15. Functional Programming

## Pure Functions

```javascript
function add(a,b){
    return a+b;
}
```

## Higher Order Functions

```javascript
array.map()
array.filter()
array.reduce()
```

---

# 16. Modules

## Export

```javascript
export default function(){}
```

## Import

```javascript
import user from "./user.js";
```

---

# 17. Browser Storage

## Local Storage

```javascript
localStorage.setItem("name","Mohibullah");
```

## Session Storage

```javascript
sessionStorage.setItem("name","Mohibullah");
```

---

# 18. APIs & Fetch

## Fetch API

```javascript
fetch("https://api.example.com")
.then(res => res.json())
.then(data => console.log(data));
```

---

# 19. Advanced JavaScript

## Closures

```javascript
function outer(){
    let count = 0;

    return function(){
        count++;
    };
}
```

## Scope

- Global Scope
- Function Scope
- Block Scope

## Hoisting

```javascript
console.log(a);
var a = 10;
```

## Execution Context

- Global Execution Context
- Function Execution Context

## Event Loop

Learn:

- Call Stack
- Callback Queue
- Microtask Queue
- Macrotask Queue

## Prototype

```javascript
User.prototype.sayHello = function(){};
```

## this Keyword

```javascript
this
```

## Bind

```javascript
bind()
call()
apply()
```

---

# 20. Design Patterns

- Module Pattern
- Singleton Pattern
- Factory Pattern
- Observer Pattern
- MVC Pattern

---

# 21. Testing

## Jest

```bash
npm install jest
```

Learn:

- Unit Testing
- Integration Testing
- Mocking

---

# 22. Performance Optimization

Learn:

- Debouncing
- Throttling
- Lazy Loading
- Code Splitting
- Tree Shaking

---

# 23. JavaScript in Node.js

## Create Project

```bash
npm init -y
```

## Install Package

```bash
npm install express
```

Topics:

- npm
- package.json
- Express.js
- File System
- Streams
- Authentication
- REST APIs

---

# 24. Projects

## Beginner

- Calculator
- Todo App
- Weather App
- Stopwatch

## Intermediate

- Expense Tracker
- Chat Application
- Quiz App
- Movie Search App

## Advanced

- E-commerce App
- Real-time Chat
- Video Calling App
- Project Management Tool

---

# 25. Interview Preparation

## Important Topics

- Scope
- Closure
- Hoisting
- Event Loop
- Promise
- Async/Await
- Prototype
- this Keyword
- DOM
- Event Delegation

---

# Recommended Learning Order

1. Basics
2. Variables
3. Operators
4. Control Flow
5. Functions
6. Arrays
7. Objects
8. ES6+
9. DOM
10. Events
11. Async JavaScript
12. OOP
13. Advanced Concepts
14. Node.js
15. Projects

---

# Final Goal

After completing this roadmap, you should be able to:

✅ Build Frontend Applications

✅ Build Backend APIs with Node.js

✅ Understand Advanced JavaScript

✅ Pass JavaScript Interviews

✅ Learn React, Vue, Angular Easily

---

Happy Coding 🚀

Made with ❤️ by Mohibullah
