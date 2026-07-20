// const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

// // console.log(descripter);

// // console.log(Math.PI);
// // Math.PI = 5
// // console.log(Math.PI);
const myobj = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function () {
        console.log("Allah Almighty is the best creator in the world");
    }
}

Object.defineProperty(myobj, 'price', {
    writable: false,
    enumerable: true,
});

for (let [key, value] of Object.entries(myobj)) {
    if (typeof value !== 'function') {
        console.log(`${key} : ${value}`);
    }
}