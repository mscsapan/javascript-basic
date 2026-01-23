const arr = [1, 9, 0, 4, 3, 0, 5, 0, 8]
const nonZero = [];
const zeros = [];
let results = [];

arr.filter((e) => {
    if (e > 0) {
        console.log(`Greater than Zero ${e}`);
        nonZero.push(e);
    } else {
        zeros.push(e);
    }

});

results = [...nonZero, ...zeros];

// console.log(nonZero);
// console.log(zeros);
console.log(results);