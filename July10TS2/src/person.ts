class Person {
    private name: string;
    private age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    public introduce(): string {
        return `Hi, I'm ${this.name} and I'm ${this.age} years old.`;
    }
      // New method to calculate birth year
    public getBirthYear(): number {
        const currentYear = new Date().getFullYear();
        return currentYear - this.age;
    }
}

const john = new Person("John", 30);
console.log(john.introduce());
console.log(`John's birth year is approximately ${john.getBirthYear()}`);