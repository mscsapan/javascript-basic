const names = ['Mohammad', 'Ali', 'Khan'];
const list = [10, 99.2, 8, 7, 9, ...names];

// list.push('Extra');
// list.pop();

// for (let i = 0; i < list.length; i++) {
//     console.log(list[i]);
// }

list.filter((e) => typeof e !== 'string').map((e) => console.log(e))