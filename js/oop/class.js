class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getInfo() {
        const name = document.getElementById('class-id').innerText = `Name ${this.name} - age ${this.age}`;
    }


}

let tiger = new Animal('Tiger', 10);
let lion = new Animal('Lion', 6);

// const name = document.getElementById('class-id').innerText = `Name ${tiger.name} - age ${tiger.age}`;

// document.writeln(tiger.name);

tiger.getInfo();
lion.getInfo();