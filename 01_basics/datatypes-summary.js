//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "ikrash",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3
 
// **Stack and Heap in Javascript**
// ### Stack Memory (Primitive Types)

// * Stores primitive data types.
// * A copy of the value is created.

// ```javascript
let a = 10;
let b = a;

b = 20;

console.log(a); // 10
console.log(b); // 20




// ```

// **Note:** Changing `b` does not affect `a`.

// ---

// ### Heap Memory (Non-Primitive Types)

// * Stores objects, arrays, and functions.
// * Variables store a reference (address) to the data.

// ```javascript
// let user1 = {
//     name: "Ikrash"
// };

// let user2 = user1;

// user2.name = "Hafiz";

// console.log(user1.name); // Hafiz
// console.log(user2.name); // Hafiz
// ```

// **Note:** Changing `user2` also changes `user1` because both point to the same object.

// ---

// ### Quick Revision

// ✅ **Primitive → Stack → Copy of Value**
// ✅ **Non-Primitive → Heap → Reference (Address)**
