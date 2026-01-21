
// const number1 = 9999999999999999n; //bigint
const number1 = 10.0;
const number2 = 5.55;
const result = (number1 / number2).toFixed(2);
// const convertedNum = new Number(result); // object
const convertedNum = Number(result); // number

const x = 0.5;
const y = 0.4

console.log(typeof convertedNum);
console.log(Number(result) + x + y);