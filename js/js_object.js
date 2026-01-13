// const names = {
//     firstName: 'Mohammad',
//     lastName: 'Ali',
//     age: 24,
//     info: function () {
//         return `Your full name is ${this.firstName} ${this.lastName} and your age is ${this.age}`
//     },
// }


// const myList = ['Mohammad', 'Ali', 24, false, names];

// console.log(names.firstName);
// for (let i = 0; i < myList.length; i++) {
//     console.log(myList[i]);
// }

// const n = Object.entries(names);
// const n = Object.keys(names);
// const n = Object.values(names);

// console.log(names.info());


// const carModel = [
//     {
//         "name": "Pontiac",
//         "model": "GTO",
//         "year": 1972,
//         "color": "Green",
//         "country": "Poland"
//     },
//     {
//         "name": "Dodge",
//         "model": "Avenger",
//         "year": 2000,
//         "color": "Maroon",
//         "country": "Uruguay"
//     },
//     {
//         "name": "Dodge",
//         "model": "Caliber",
//         "year": 2009,
//         "color": "Maroon",
//         "country": "China"
//     },
//     {
//         "name": "Jeep",
//         "model": "Wrangler",
//         "year": 1995,
//         "color": "Turquoise",
//         "country": "France"
//     },
//     {
//         "name": "Lexus",
//         "model": "IS",
//         "year": 2012,
//         "color": "Blue",
//         "country": "Laos"
//     },
// ]

// const carModel = {
//     name: "Pontiac",
//     model: "GTO",
//     year: 1972,
//     colors: ['Green', 'Red', 'Yellow', 'White', 'Black'],
//     country: "Poland",
//     isAvailableNow: true,
//     // detail: () =>{
//     //      return `Car name is ${this.name}`;
//     // },
//     //Arrow functions don't have their own this - they inherit this from the outer scope

//     // detail: function () {
//     //     return `Car name is ${this.name}`;
//     // },
//     detail() {
//         return `Car name is ${this.name}`;
//     },
// }


// console.log(`Color type is ${typeof colors}`);

// if (carModel.hasOwnProperty('color')) {
//     for (let i = 0; i < carModel.color.length; i++) {
//         console.log(carModel.color[i]);
//     }
// } else {
//     console.log(`not found for color property`);
// }



// console.log(typeof carModel.color);


const car1 = {
    "name": "Pontiac",
    "model": "GTO",
    "year": 1972,
    "color": "Green",
    "country": "Poland"
}

const car2 = {
    "name": "Dodge",
    "model": "Avenger",
    "year": 2000,
    "color": "Maroon",
    "country": "Uruguay"
}

const combinedObj = Object.assign({}, car1, car2)

console.log(combinedObj);