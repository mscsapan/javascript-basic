const helloText = document.getElementById('hello-world');
// console.log(helloText);
let count = 0;
let i = 0;

const myList = [1, 2, 3, 4, 5, 6, 7, 8];


//for loop
/* for (let i = 0; i < 11; i++) {
    document.writeln(`<h5> Hello World!</h5>`);

    if (i % 2 == 0) {
        console.log(i);
        count += i;
    }

} */



// while (i < 10) {
//     document.writeln(`<h5> Hello World!</h5>`);

//     if (i % 2 == 0) {
//         console.log(i);
//         count += i;
//     }

//     i++;
// }

for (const e of myList) {
    console.log(e);
    count += e;
}

console.log('Count : ' + count);