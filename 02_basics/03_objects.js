// non-singleton
// Object.create

// object literals
const mySym = Symbol("robot");
//non-singleton object
const JsUser = {
    name: "ikrash",
    "full name": "hafiz ikrash",
    age: 20,
    city: "Lahore",
    email: "hafizikrash809@gmail.com",
    [mySym]: "robot",
    isLoggedIn: false
};

JsUser.greetings = function () {
    console.log("hello guys");
};

JsUser.greetings2 = function () {
    console.log(`hello this is ${this.name}`);
};

JsUser.greetings();
JsUser.greetings2();

 


// console.log(JsUser.name);
// console.log(JsUser["full name"]);
// console.log(JsUser[mysym]);
// console.log(JsUser.email);
// console.log(JsUser["email"]);






//JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)
//JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

// JsUser.greeting = function(){
//     console.log("Hello JS user");
// }
// JsUser.greetingTwo = function(){
//     console.log(`Hello JS user, ${this.name}`);
// }

// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());