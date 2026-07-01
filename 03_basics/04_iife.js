// Immediately Invoked Function Expressions (IIFE)

//It creates its own private scope, helping avoid pollution of the global scope.

(function greet(name){
    let username ="ikrash";
    console.log(`Welcome to ${username} dev`);
})("ikrash");


// (function DB Connected(){
//     // named IIFE
//     console.log(`DB CONNECTED`);
// })();
(() => {
    console.log("DB Connected");
    
})();

// ( (name) => {
//     console.log(`DB CONNECTED TWO ${name}`);
// } )('ikrash')

