const currentDate = new Date();

// console.log(currentDate);
// console.log(currentDate.toDateString());
// console.log(currentDate.toLocaleDateString());
// console.log(currentDate.getDate());
// console.log(currentDate.getFullYear());
// console.log(currentDate.getUTCFullYear());
// console.log(currentDate.toLocaleString('default', {
//     // weekday: 'long'
//     weekday: 'short'
//     // weekday: 'narrow'
// }));


const startTimem = Date.now();
const endTimem = Date.now();

const calulateTime = () => {
    for (let start = 0; start < 5; start++) {
        console.log('Calculating.....');
    }
}