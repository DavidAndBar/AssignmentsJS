interface Shape {
    calculateArea(): number;
}

class Circle implements Shape {
    constructor(private radius: number) {}

    calculateArea(): number {
        return Math.PI * this.radius ** 2;
    }
}

class Rectangle implements Shape {
    constructor(private width: number, private height: number) {}

    calculateArea(): number {
        return this.width * this.height;
    }
}

const circle = new Circle(5);
const rectangle = new Rectangle(4, 6);

console.log(`Circle area: ${circle.calculateArea()}`);
console.log(`Rectangle area: ${rectangle.calculateArea()}`);