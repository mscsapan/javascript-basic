const number = 65.0;
let message;


if (number >= 80) {
    message = 'A+';
} else if (number >= 60 && number < 80) {
    message = 'A';
} else if (number >= 33 && number < 60) {
    message = 'Pass but unsatisfied';
} else {
    message = 'Unfortunately you failed';
}


console.log(message);