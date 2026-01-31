// # 01. Write a Python program to count the number of characters (character frequency) in a string.
// # Sample String : google.com'
// # Expected Result : {'g': 2, 'o': 3, 'l': 1, 'e': 1, '.': 1, 'c': 1, 'm': 1}

// # def count_chars(name):
// #     dict = {}
// #     keys = dict.keys()
// #     for i in name:
// #         if i in keys:
// #             dict[i] += 1
// #         else:
// #             dict[i] = 1
// #     return dict

// # print(count_chars('https://www.google.com'))

const person = {
    name: 'Ali',
    age: 40
}

const myName = 'Mohammad Ali Khan';
let tempObj = {};

for (let i = 0; i < myName.length; i++) {
    const item = myName[i];

    if (item in tempObj) {
        tempObj[item] += 1;
    } else {
        tempObj[item] = 1;
    }

}

console.log(tempObj);



