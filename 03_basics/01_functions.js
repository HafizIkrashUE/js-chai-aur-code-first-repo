// function myfunction(){
//      console.log("hafiz");
//     console.log("ikrash"); 
//     console.log("riaz");
// }
// myfunction()

// function addingfunction(number1,number2){
//     console.log(number1+number2);
    
// }
// addingfunction(5,8)

// function newfunction(number1, number2) {
//     return number1 + number2;
// }
// const result = newfunction(3, 4);
// console.log("result is,", result);

// function usernameloginmessage(username = "dafault username") {
//     if (!username) {
//         console.log("Please enter a username");
//         return;
//     }

//     return `${username} just logged in.`;
// }

// console.log(usernameloginmessage());

/*** next video ***/

function calculateCartPrice(...prices){
    return prices.reduce((total,price)=> total + price,0);
}
console.log(calculateCartPrice(200,300,400,500,600));


// function calculateCartPrice(val1, val2, ...num1){
//     return num1
// }

// // console.log(calculateCartPrice(200, 400, 500, 2000))

// const user = {
//     username: "hitesh",
//     prices: 199
// }

// function handleObject(anyobject){
//     console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
// }

// handleObject(user)
// handleObject({
//     username: "sam",
//     price: 399
// })

// const myNewArray = [200, 400, 100, 600]

// function returnSecondValue(getArray){
//     return getArray[1]
// }

// console.log(returnSecondValue(myNewArray));
//console.log(returnSecondValue([200, 400, 500, 1000]));