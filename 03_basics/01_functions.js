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

// function calculateCartPrice(...prices){
//     return prices.reduce((total,price)=> total + price,0);
// }
// console.log(calculateCartPrice(200,300,400,500,600));
const userobject = {
    username: "ikrash",
    id: 21
};

function myfunction(myobject) {
    console.log(`my username is ${myobject.username} and the id is ${myobject.id}`);
}

myfunction(userobject);



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