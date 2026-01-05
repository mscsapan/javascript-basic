let sum = 0;

let myArgs = (...args) => {
    for (let i = 0; i < args.length; i++) {
        let item = args[i];
        if (typeof item !== 'string') {
            sum += item;
        }

    }
}

myArgs(10, 20, 0.992, 'Mohammad', 12.9, 7.1, 'Ali')

console.log(`summation is ${sum}`);