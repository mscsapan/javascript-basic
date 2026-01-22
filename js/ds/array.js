const names = { firstName: 'Mohammad', lastName: 'Ali', age: 28 };

const fruits2 = ['Water melon', 'Pine apple'];

const fruits = ["Banana", "Orange", "Apple", "Mango", ...fruits2, names];

fruits.push('Grapes')

console.log(fruits);

// Master these methods:
let numbers = [1, 2, 3, 4, 5];

// map - transform each element
numbers.map(n => n * 2);

// filter - keep elements that pass test
numbers.filter(n => n > 2);

// reduce - combine into single value
numbers.reduce((sum, n) => sum + n, 0);

// find - get first matching element
numbers.find(n => n > 3);

// export const arrays = { names, fruits, fruits2 }