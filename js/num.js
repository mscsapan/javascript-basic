
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

const n = 248;

const nToString = n.toString(2);//return bynamary fo 10 (1010)

// console.log(`n type : ${typeof n} - nToString type ${typeof nToString}`);

// console.log(nToString);

let nMethod = Number.EPSILON;
nMethod = Number.MAX_SAFE_INTEGER;
nMethod = Number.MIN_SAFE_INTEGER;
nMethod = Number.MAX_VALUE;
nMethod = Number.MIN_VALUE;
nMethod = Number.POSITIVE_INFINITY;
nMethod = Number.NEGATIVE_INFINITY;
nMethod = Number.NaN;
nMethod = Number.isInteger;

console.log(nMethod);