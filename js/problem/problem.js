//problem 01
const a = 10;
const b = 5;
const sum = a + b;
console.log(`Output: ${sum}`);


//problem 02
function checkNumber(num) {
    let result;
    if (num > 0) {
        result = 'Positive';
    } else if (num < 0) {
        result = 'Negative';
    } else if (num == 0) {
        result = 'Zero';
    }
    console.log(result);
}

checkNumber(1);

//problem 03

for (let i = 1; i <= 20; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

//problem 04
function reverseStrings(str) {
    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}

console.log(reverseStrings('Hello'));


//problem 05
function findLargest(arr) {
    let largest = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    console.log(`Largest number is ${largest}`);

}

findLargest([3, 7, 2, 9, 10]);

//problem 06
function filterAndDouble(arr) {
    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            newArray.push(arr[i]);
        }
    }

    console.log(newArray.map((e) => e * 2));
}

filterAndDouble([1, 2, 3, 4, 5, 6])