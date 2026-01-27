// Create a student object with name, age, and grade
// Write a function that returns: "Name is Age years old and got Grade grade"
// Example: "John is 20 years old and got A grade"

// function studentInfo(student) {
//     // Your code here
// }

// Test:
// studentInfo({ name: "John", age: 20, grade: "A" })

// const student = {
//     name: 'Mohammad Ali',
//     age: 28,
//     grade: 'A'
// };

class Student {
    constructor(name, age, grade) {
        this.name = name;
        this.age = age;
        this.grade = grade;
    }
}

function studentInfo(student) {
    console.log(`${student.name} is ${student.age} years old and got ${student.grade}`);
};


studentInfo(student)