class Device {
    constructor(invention_year, type) {
        this.type = type;
        this.invention_year = invention_year;
    }
}

class Monitor extends Device {
    constructor(name, invention_year, type) {
        super(invention_year, type);
        this.name = name;
    }
}

// const monitor = new Monitor('Electric Monitor', 2020, 'device');

// console.log(monitor.type);


// getter and setter 


class Car {
    constructor(name) {
        this.name = name;
    }

    get get_car_name() {
        return this.name;
    }

    set set_car_name(name) {
        this.name = name;
    }
}


