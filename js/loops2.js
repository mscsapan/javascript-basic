const list = ['A', 'B', 'C', 'D', 'E', 'F'];
const objs = { name: 'Ali', age: 26, email: 'email@emai.com', phone: '01988828273', address: 'Dhaka' }

// for (let i of list) {
//     console.log(i);
// }

list.forEach((value, index) => {
    console.log(`value ${value} - Index ${index}`);
});