/*
Call Stack
! JS Primitive data types
 ? String, Number, Boolean, undefined, Null, NaN, Sumbol, bigInt

*/

/*
Heap Stack
 ? Object, Array
*/

let myname = 'Mohammad Ali';

myname = 'Ali';

// console.log(myname);

const myInfo = {
    name: 'Ali',
    email: 'email@email.com',
    age: 28
}

const yourInfo = myInfo;

yourInfo.name = 'Mohammad';

console.log(myInfo);
console.log(yourInfo);