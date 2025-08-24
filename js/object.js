let person = {
    name: "Mohammad Ali",
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "red"
};

person.education = 'BSc in CSE';
person.all = () => person.firstName + ' ' + person.lastName;
// person.all = function() {return person.firstName + person.lastName};
console.log(person.all());


// document.getElementById('body').innerHTML = person.hasOwnProperty('education') ? person['education'] : 'Not found!';
document.getElementById('body').innerHTML = person.all();

