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

const monitor = new Monitor('Electric Monitor', 2020, 'device');

console.log(monitor.type);