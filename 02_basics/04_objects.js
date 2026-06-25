


// const tinderUser = new Object()  //singleton object bcz it created with constructor
//const tinderUser = {} //we commonly used this method
// this is non-singleton object bcz it created with object literals not with constructor


// tinderUser.id = "123abc"
// tinderUser.name = "Sammy"
// tinderUser.isLoggedIn = false

// console.log(tinderUser);


// const regularUser = {
//     email: "some@gmail.com",
//     fullname: {
//         userfullname: {
//             firstname: "hitesh",
//             lastname: "choudhary"
//         }
//     }
// }

// console.log(regularUser.fullname.userfullname.firstname);

// const obj1 = {1: "a", 2: "b"}
// const obj2 = {3: "a", 4: "b"}
// const obj3 = {5: "a", 6: "b"}

//const obj4 = { obj1, obj2 ,obj}
//const obj4 = Object.assign({}, obj1, obj2, obj4)

// const obj4 = {...obj1, ...obj2, ...obj3}
// console.log(obj4);


// const users = [
//     {
//         id: 1,
//         email: "h@gmail.com"
//     },
//     {
//         id: 1,
//         email: "h@gmail.com"
//     },
//     {
//         id: 1,
//         email: "h@gmail.com"
//     },
// ]

// users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

//***next video */
const subject = {
    name: "english",
    price: "3000",
    subjectTeacher: "ikrash"
};

//console.log(subject.subjectTeacher); dot method for accessing properties of object
const{subjectTeacher}=subject; //destructuring modern method 
const{subjectTeacher:teacher}=subject;
console.log(teacher);
// JSON 

// {
//     "name": "ikrash",
//     "coursename": "js in urdu",
//     "price": "free"
// }

// [
//     {},
//     {},
//     {}
// ]

