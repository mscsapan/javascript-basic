const myMaps = new Map();
const myObj = {
    firstName: 'Mohammad',
    lastName: 'Ali',
    email: 'email@gmail.com',
    age: 28,
    phone: '019887732'
};

myMaps.set('name', 'Ali')
myMaps.set('email', 'ali@email.com')
myMaps.set('phone', '019887732')
myMaps.set(1, 2)

// console.log(myMaps);

// myMaps.forEach((val, key) => console.log(`Key : ${key}, Value : ${val}`));

// myMaps.keys().forEach((val) => console.log(val));

// for (const x of myMaps.keys()) {
//     console.log(x);
// }

// for (const x of myMaps.values()) {
//     console.log(x);
// }

// for (const x of myMaps.entries()) {
//     console.log(x);
// }

// console.log(myMaps.has('name'))
// console.log(myMaps.size)
// console.log(myMaps.clear)
// console.log(myMaps.delete('email'))
