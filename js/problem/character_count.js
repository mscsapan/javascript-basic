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



