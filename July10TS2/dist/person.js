"use strict";
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    introduce() {
        return `Hi, I'm ${this.name} and I'm ${this.age} years old.`;
    }
    // New method to calculate birth year
    getBirthYear() {
        const currentYear = new Date().getFullYear();
        return currentYear - this.age;
    }
}
const john = new Person("John", 30);
console.log(john.introduce());
console.log(`John's birth year is approximately ${john.getBirthYear()}`);
