const names = { firstName: 'Mohammad', lastName: 'Ali', age: 28 };

const fruits2 = ['Water melon', 'Pine apple'];

const fruits = ["Banana", "Orange", "Apple", "Mango", ...fruits2, names];

fruits.push('Grapes')

console.log(fruits);