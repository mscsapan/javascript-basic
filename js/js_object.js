const names = {
    firstName: 'Mohammad',
    lastName: 'Ali',
    age: 24,
    info: function () {
        return `Your full name is ${this.firstName} ${this.lastName} and your age is ${this.age}`
    },
}


const myList = ['Mohammad', 'Ali', 24, false, names];

// console.log(names.firstName);
// for (let i = 0; i < myList.length; i++) {
//     console.log(myList[i]);
// }

const n = Object.entries(names);

console.log(names.info());

