
class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }

    getGretting() {
        // return 'Hi!' + this.name;
        return  `Hi, I am ${this.name} !`;
    }

    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`
    }
}

class Student extends Person {
    // override constructer
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }

    hasMajor() {
        return !!this.major;
    }
    // override getDescription
    getDescription() {
        let description = super.getDescription();

        if (this.hasMajor()) {
            description += ` His/Her major is ${this.major}`;
        }
        return description;
    }
}

class Traveler extends Person {
    constructor(name, age, location="Nowhere") {
        super(name, age);
        this.homeLocation = location;
    }

    getGretting() {
        let greeting = super.getGretting();
        
        if (this.homeLocation) {
            greeting += ` I'm visiting from ${this.homeLocation}`;
        }
        return greeting;
    }
}

// const me = new Student('yuesong li', 25, 'Information Science');
// console.log(me.getDescription());
const me = new Traveler('yuesong li', 25, 'Pittsburgh');
console.log(me.getGretting());
const other = new Traveler();
console.log(other.getGretting());