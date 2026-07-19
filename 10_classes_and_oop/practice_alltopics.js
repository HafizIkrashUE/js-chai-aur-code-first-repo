// ==========================
// 1. Object Destructuring
// ==========================
const student = {
    name: "Ikrash",
    age: 21,
    course: "JavaScript"
};

const { name, age, course } = student;


// ==========================
// 2. Spread Operator
// ==========================
const frontend = ["HTML", "CSS"];
const allSkills = [...frontend, "JavaScript", "React"];


// ==========================
// 3. Rest Operator
// ==========================
function totalMarks(...marks) {
    return marks;
}

totalMarks(80, 90, 95);


// ==========================
// 4. Optional Chaining
// ==========================
const user = {
    username: "Ikrash"
};

const city = user.address?.city;


// ==========================
// 5. Iterator
// ==========================
const languages = ["HTML", "CSS", "JavaScript"];

for (const language of languages) {
    // Iterate through each language
}


// ==========================
// 6. Generator
// ==========================
function* idGenerator() {
    yield 1;
    yield 2;
    yield 3;
}

const ids = idGenerator();

ids.next();
ids.next();
ids.next();


// ==========================
// 7. ES Modules
// ==========================

// math.js
export function add(a, b) {
    return a + b;
}

// app.js
import { add } from "./math.js";

add(10, 20);


// ==========================
// 8. CommonJS
// ==========================

const calculator = require("./calculator");

calculator.add(10, 20);


// ==========================
// 9. Singleton Design Pattern
// ==========================
const database = {
    host: "localhost",
    port: 3306
};

Object.freeze(database);